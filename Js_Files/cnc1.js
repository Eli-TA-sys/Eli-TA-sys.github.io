/*****************************************************
 *This File is similar to cnc2.js This file takes in *
 *the json encoded data from cnc1Graphing.php. After *
 *some filtering it then displays that data to a few *
 *charts on cnc1.php.                                *
 *Created By: Elijsha Baetiong                       *
 *Last Edited: 3/16/20                               *
 * ***************************************************/
window.onload = function () {
	var time = []
	var motionTime = [];
	var powerTime=[];
	var avalibility=[];
	var d = new Date(); 
	var date= (d.getMonth()+1)+'-'+d.getDate()+'-'+d.getFullYear();
	var datetime
	var mintues=0;
	var hour=0;
	//next step is create my own clock incrementer
		
	//for the size of the data push the correct information into their respective arrays
	for(i=0;i<50;i++){
		mintues=i*5%60;
		if(i%12==0 & i!=0){
			hour+=1;
			if(hour>12){
				hour=1;
			}
		}
		if(mintues < 10){
			datetime=date+' '+hour+':0'+mintues;
		}
		else{
			datetime=date+' '+hour+':'+mintues;
		}
		time.push(datetime);
		//get the motion time from the start to the end
		if(i>0){
		motionTime.push(Math.floor(Math.random() * 2) ? i-1 : i);
		
		console.log(Math.floor(Math.random() * 2));
		}
		else{
			motionTime.push(i);
		}
		powerTime.push(i);
		//probably setup avalibility
		if(i!=0)
			avalibility.push(motionTime[i]/powerTime[i]*100);
		else
			avalibility.push(0);
	}
	//this setups the chart data for avaliblity 
	var chartdata = {
		labels:time,
			datasets:[{
			label: 'avalibility',
		 	backgroundColor:'rgba(255,255,0,0.75)',
			borderColor: 'rgba(0,0,0,0.75)',
			hoverBackgroundColor:'rgba(0,0,0,1)',
			hoverBorderColor: 'rgba(200,200,200,200,1)',
			data: avalibility
			}

		]
	};
	//grab the avaliblity canvas and put the chart on it
	var ctx = document.getElementById("avab").getContext("2d");
	var barGraph = new Chart(ctx,{
	type: 'line',
	data: chartdata,
		options: {
			title:{
				//display chart title "Avalibility"
				display:true,
				text: 'Avalibility'
			},
			legend:{
				//hide the legend
				display:false
			},
			scales:{
				yAxes:[{
					ticks:{
						//start at zero
						beginAtZero: true
					},
					scaleLabel:{
						//Set scale to display perecentage
						display:true,
						labelString:'Percentage (%)'
					}
				}],
			},
			//Make it responsive to screen size
			responsive:true,
		}

	});

	//Follows the same as above but for runtime
	var chartdata = {
		labels:time,
			datasets:[{
			label: 'Run Time',
		 	backgroundColor:'rgba(255,20,147,0.5)',
			borderColor: 'rgba(0,0,0,0.75)',
			hoverBackgroundColor:'rgba(0,0,0,1)',
			hoverBorderColor: 'rgba(200,200,200,200,1)',
			data:motionTime 
			}

		]
	};
	var run = document.getElementById("run").getContext("2d");
	var barGraph = new Chart(run,{
	type: 'line',
	data: chartdata,
		options: {
			title:{
				display:true,
				text: 'Run time'
			},
			legend:{
				display:false
			},
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true
					},
					scaleLabel:{
						display:true,
						labelString:"# of mintues"
					}
				}],

			},
			responsive:true,

		}

	});
	//Now for uptime
	var chartdata = {
		labels:time,
		datasets:[
			{
			label: 'upTime',
		 	backgroundColor:'rgba(50,205,50,0.5)',
			borderColor: 'rgba(0,0,0,0.75)',
			hoverBackgroundColor:'rgba(0,0,0,1)',
			hoverBorderColor: 'rgba(200,200,200,200,1)',
			data:powerTime 
			}
		]
	};
	var up = document.getElementById("Up").getContext("2d");
	var barGraph = new Chart(up,{
	type: 'line',
	data: chartdata,
		options: {
			title:{
				display:true,
				text: 'Up time'
			},
			legend:{
				display:false
			},
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
					},
					scaleLabel:{
						display:true,
						labelString:"# of minutes"
					},
				}],
	
			},
			responsive:true,
			maintainAspectRatio:true
		}

	});
}
