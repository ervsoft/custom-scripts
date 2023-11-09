//VERSION=3
function setup() {
    return {
        input: ["VV", "VH", "dataMask"],
        output: [
            { id: "default", bands: 4 },
            { id: "index", bands: 1, sampleType: "FLOAT32" },
            { id: "eobrowserStats", bands: 1, sampleType: 'FLOAT32' },
            { id: "dataMask", bands: 1 }
        ]
    };
}

const ramp = [
    [0, 0x8e0152],
    [0.25, 0xde77ae],
    [0.5, 0xf7f7f7],
    [0.75, 0x7fbc41],
    [1, 0x276419],
];


const visualizer = new ColorRampVisualizer(ramp);

function evaluatePixel(samples) {
    let dop = (samples.VV / (samples.VV + samples.VH));
    let m = 1 - dop;
    //depolarization within the vegetation
    let val = (Math.sqrt(dop)) * ((4 * (samples.VH)) / (samples.VV + samples.VH));
    // The library for tiffs works well only if there is only one channel returned.
    // So we encode the "no data" as NaN here and ignore NaNs on frontend.
    const indexVal = samples.dataMask === 1 ? val : NaN;
    const imgVals = visualizer.process(val);

    return {
        default: imgVals.concat(samples.dataMask),
        index: [indexVal],
        eobrowserStats: [val],
        dataMask: [samples.dataMask]
    };
}
