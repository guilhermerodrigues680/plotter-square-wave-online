const PlotWaveAreaDOM = document.getElementById('plot-wave-area');

   
function generateSquareWave(f, T) {
    if (T < 1){
        throw ('O perido deve ser inteiro > 0');
    }

    const titleX = 'Tempo(s)';
    const titleY = 'Tensão(V)';
    const p = 1/f;
    // x = [0, p/2, p/2, p, p];
    // y = [0, 0, 5, 5, 0];
    let x = [], y = [];

    for (let i = 0; i < T; i++) {
        console.debug(i);
        x = x.concat([p*i, (p*i)+(p/2), (p*i)+(p/2), p*(i+1), p*(i+1)]);
        y = y.concat([0, 0, 5, 5, 0]);
    }

    waveInfo = `Frequencia: ${f}Hz :: Periodo: ${p}s :: Nº periodos plotados: ${T}`;
    
    const res = {
        'x': x,
        'y': y,
        'titleX': titleX,
        'titleY': titleY,
        'waveInfo': waveInfo,
    };
    
    console.debug(res);
    console.log(waveInfo);
    return res;
}


function plotSquareWave(f, T, dutyCicle=null) {
    const wave = dutyCicle === null ? generateSquareWave(f, T) : generateSquareWavePWM(f, T, dutyCicle);

    console.log(wave);
    // Ex: Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});

    let data = [];
    const layout = {
        title: dutyCicle === null ? 'Onda Quadrada' : 'Onda Quadrada PWM',
        xaxis: { title: wave.titleX },
        yaxis: { title: wave.titleY },
    }

    const trace1 = {
        x: wave.x,
        y: wave.y,
        type: 'scatter',
        line: { color: 'firebrick', width: 5 },
    };
    data.push(trace1);

    // margin: { t: 0 },
    Plotly.newPlot( PlotWaveAreaDOM, data, layout);
    return waveInfo;
}


function generateSquareWavePWM(f, T, dutyCicle){
    if (T < 1){
        throw ('O perido deve ser inteiro > 0');
    }

    const titleX = 'Tempo(s)';
    const titleY = 'Tensão(V)';
    const p = 1/f;
    // x = [0, p*(dutyCicle/100), p*(dutyCicle/100), p, p]
    // y = [5, 5, 0, 0, 5]
    let x =[], y =[];

    for (let i = 0; i < T; i++) {
        console.debug(i);
        x = x.concat([p*i, (p*i)+p*(dutyCicle/100), (p*i)+p*(dutyCicle/100), p*(i+1), p*(i+1)]);
        y = y.concat([5, 5, 0, 0, 5]);   
    }

    waveInfo = `Frequencia: ${f}Hz :: Periodo: ${p}s :: DutyCicle ${dutyCicle}% :: Nº periodos plotados: ${T}`;

    res = {
        'x': x,
        'y': y,
        'titleX': titleX,
        'titleY': titleY,
        'waveInfo': waveInfo,
    };

    console.debug(res);
    console.log(waveInfo);
    return res;
}