const BtnPlotWaveDOM = document.querySelector('#btn-plot-wave');
const WaveFrequencyDOM = document.querySelector('#input-wave-frequency');
const WavePeriodsDOM = document.querySelector('#input-wave-periods');
const PwaveInfoDOM = document.querySelector('#p-wave-info');

BtnPlotWaveDOM.addEventListener('click', callPlotSquareWave);
WaveFrequencyDOM.addEventListener('change', callPlotSquareWave);
WavePeriodsDOM.addEventListener('change', callPlotSquareWave);

function callPlotSquareWave(e) {
    const f = WaveFrequencyDOM.value;
    const T = WavePeriodsDOM.value;

    const waveInfo = plotSquareWave(f, T);
    PwaveInfoDOM.innerText = waveInfo;
}


function defaultPlot() {
    // Plot default 1Hz , 2 Periods
    const waveInfo = plotSquareWave(1, 2);
    PwaveInfoDOM.innerText = waveInfo;
}


defaultPlot();