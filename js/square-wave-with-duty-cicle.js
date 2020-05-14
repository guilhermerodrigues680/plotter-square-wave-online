const BtnPlotWaveDOM = document.querySelector('#btn-plot-wave');
const WaveFrequencyDOM = document.querySelector('#input-wave-frequency');
const WavePeriodsDOM = document.querySelector('#input-wave-periods');
const WaveDutyCicleDOM = document.querySelector('#input-wave-dutycicle');
const PwaveInfoDOM = document.querySelector('#p-wave-info');

BtnPlotWaveDOM.addEventListener('click', callPlotSquareWave);
WaveFrequencyDOM.addEventListener('change', callPlotSquareWave);
WavePeriodsDOM.addEventListener('change', callPlotSquareWave);
WaveDutyCicleDOM.addEventListener('change', callPlotSquareWave);

function callPlotSquareWave(e) {
    const f = WaveFrequencyDOM.value;
    const T = WavePeriodsDOM.value;
    const dutyCicle = WaveDutyCicleDOM.value;

    const waveInfo = plotSquareWave(f, T, dutyCicle);
    PwaveInfoDOM.innerText = waveInfo;
}


function defaultPlot() {
    // Plot default 1Hz , 2 Periods, 20% Duty Cicle
    const waveInfo = plotSquareWave(1, 2, 20);
    PwaveInfoDOM.innerText = waveInfo;
}


defaultPlot();