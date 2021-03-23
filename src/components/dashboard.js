import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Chart from 'react-google-charts';


function Dashboard() {
  const TITULO = 'Quantidade de acessos:';
  const ANIMATION = { duration: 1000, easing: 'out', startup: true};

  const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 56],
    ['Março', 80],
    ['Abril', 77],
    ['Maio', 35],
    ['Junho', 55],
  ]);

  useEffect(() =>{
    function alterarDados() {
      const dadosGraficos = dados.map( linha =>{
        if(Number.isInteger( linha[1])){
          linha[1] = Math.floor(Math.random() * 101);
        }
        return linha;
      });
      setDados(dadosGraficos)
    }

    const  intervalId = setInterval(() => alterarDados(), 5000)
    
    return () => {
      clearInterval(intervalId)
    }
  }, [dados]);


  return (
    <div>
      <div id='c-graficos'>
        <h1>Dashboard de monitoramento</h1>
        <div class='graficos'>
          <Chart className='margin-top'
          width={'500px'}
          height={'400px'}
          chartType={'PieChart'}
          data={dados}
          options={{
            title:TITULO
          }} />
        </div>
        <div class='graficos'> 
          <Chart
            width={'500px'}
            height={'400px'}
            chartType={'PieChart'}
            data={dados}
            options={{
              title:TITULO,
              is3D: true
            }} />
        </div>
        <div class='graficos'>   
          <Chart
            width={'500px'}
            height={'400px'}
            chartType={'PieChart'}
            data={dados}
            options={{
              title:TITULO,
              pieHole:0.4
            }} />
        </div>  
        <div class='graficos'>
          <Chart
            width={'500px'}
            height={'400px'}
            chartType={'BarChart'}
            data={dados}
            options={{
              title:TITULO,
              bars: 'horizontal',
              chartArea: { width: '50%' },
              hAxis: { title:'Quantidade' },
              vAxis: { title:'Mês' },
              animation: ANIMATION
            }} />
        </div>
        <div class='graficos'>   
          <Chart
            width={'500px'}
            height={'400px'}
            chartType={'LineChart'}
            data={dados}
            options={{
              title:TITULO,
              hAxis: { title:'Mês' },
              vAxis: { title:'Quantidade' },
              animation: ANIMATION
            }} />
        </div> 
        <div class='graficos'> 
          <Chart
            width={'500px'}
            height={'400px'}
            chartType={'AreaChart'}
            data={dados}
            options={{
              title:TITULO,
              hAxis: { title:'Mês' },
              vAxis: { title:'Quantidade' },
              animation: ANIMATION
            }}/>
        </div>
      </div>  
    </div>
  );
}

export default Dashboard;
