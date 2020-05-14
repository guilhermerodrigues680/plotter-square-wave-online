const BtnPlotWaveDOM = document.querySelector('#btn-plot-wave');

BtnPlotWaveDOM.addEventListener('click', function (e) {
    const WaveFrequencyDOM = document.querySelector('#input-wave-frequency');
    const WavePeriodsDOM = document.querySelector('#input-wave-periods');

    const f = WaveFrequencyDOM.value;
    const T = WavePeriodsDOM.value;

    plotSquareWave(f, T);
});


// Plot default 1Hz , 2 Periods
plotSquareWave(1, 2);