/**********************************************************************
 *This should be pretty much Identical to CNC1.js. Please refer to    *
 *That page for information on how that works/comments.               *
 *                                                                    *
 *Created By:Elijsha Baetiong                                         *
 *Last Edited: 3/16/20                                                *
 **********************************************************************/

window.onload = function () {
	var time =[];
	var motionTime = [];
	var powerTime=[];
	var avalibility=[];
	var i=0;
	var d = new Date(); 
	var date= d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
	var curTime =d.getHours() + ":" + d.getMinutes();
	var datetime=date+' '+curTime;

	
	//next step is create my own clock incrementer
		
	//for the size of the data push the correct information into their respective arrays
	for(i=0;i<50;i++){
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
	var avab = document.getElementById("avab").getContext("2d");
	var barGraph = new Chart(avab,{
	type: 'line',
	data: chartdata,
		options: {
			title:{
				display:true,
				text: 'Avalibility'
			},
			legend:{
				display:false
			},
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero: true
					},
					scaleLabel:{
						display:true,
						labelString:'Percentage (%)'
					}
				}],
			},
			responsive:true,
		}

	});
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
