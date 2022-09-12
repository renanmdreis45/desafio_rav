import React, { useContext } from 'react';
import { GlobalContext } from '../context/global';
import Chart from 'react-apexcharts';
import {Grafico} from './styles/compStyles';
import './styles/compStyles.css'

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    'R$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i) {
        return num === '-' ? acc : num + (i && !(i % 3) ? '.' : '') + acc;
      }, '') +
    ',' +
    p[1]
  );
}


export const ColumnChart = () => {
    
    //Balanço
    const {movements} = useContext(GlobalContext);

    const receitas = movements
    .filter(movement => movement.tipo === 'Receita')

    const recs = receitas
    .map(rec => rec.valor)
    .reduce((sum, rec) => (sum += rec),0);

    const despesas = movements
    .filter(movement => movement.tipo === 'Despesa')
    
    const desps = despesas
    .map(rec => rec.valor)
    .reduce((sum, rec) => (sum += rec),0);

      let colors = ['#5932EA', '#EA3232'];
      let legends = ['#EA3232', '#5932EA'];
      let yaxis = ['#BCBCBC'];

      const config = {
      
        series: [{
          data: [recs, desps]
        }],

        options: {
          chart: {
            offsetY: 0,
            offsetX: 0,
            toolbar: {
              show: false,
            },
            type: 'bar',
            events: {
              click: function(chart, w, e) {
                // console.log(chart, w, e)
              }
            }
          },
          title: {
            text: 'Receitas e despesas',
            align: 'left',
            margin: -30,
            offsetX: -2,
            offsetY: 20,
            floating: false,
            style: {
              fontSize:  '22.4px',
              fontWeight:  900,
              fontFamily:  'Poppins',
              color:  '#263238'
            },
          },        
          colors: colors,
          plotOptions: {
            bar: {
              columnWidth: '61px',
              distributed: true,
              borderRadius: 8,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            fontWeight: 900,
            fontFamily:  'Poppins',
            fontSize: '14px',
            offsetX: 0,
            offsetY: -10,
            customLegendItems: ['Despesas', 'Receitas'],
            markers: {
              width: 16,
              height: 16,
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: legends,
              radius: 2,
              customHTML: undefined,
              onClick: undefined,
              offsetX: 0,
              offsetY: 3
          },
          itemMargin: {
            horizontal: 14,
            vertical: 5
        },
          },
          xaxis: {
            categories: [
              [moneyFormatter(recs)],
              [moneyFormatter(desps)],
            ],
            labels: {
              style: {
                colors: colors,
                fontSize: '14px',
                fontWeight: 700,
              }
            }
          },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: colors,
            width: 2,
            dashArray: 0,      
         },
         grid: {
          show:true,
          borderColor: '#E0E0E0',
          strokeDashArray: 3,
          position: 'back',
         },
          yaxis: {
            show:true,
            labels: {
              show: true,
              align: 'left',
              style: {
                colors: yaxis,
                fontSize: '14.33px',
                fontWeight: 400,                
              },
              offsetY: 5,
              offsetX: -10,
            },
          }
        },
      
      
      };


      return (
        <Grafico>
          <div id="chart">
            <Chart options={config.options} series={config.series} type="bar" height={303} width={500}/>
          </div>
        </Grafico>
      );
  }
