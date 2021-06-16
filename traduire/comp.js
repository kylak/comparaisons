

//INDEX
index_nb_name = {
1:'MATTHIEU',
2:'MARC',
3:'LUC',
4:'JEAN',
5:'ACTES',
6:'ROMAINS',
7:'1-CORINTHIENS',
8:'2-CORINTHIENS',
9:'GALATES',
10:'EPHESIENS',
11:'PHILIPPIENS',
12:'COLOSSIENS',
13:'1-THESSALONICIENS',
14:'2-THESSALONICIENS',
15:'1-TIMOTHEE',
16:'2-TIMOTHEE',
17:'TITE',
18:'PHILEMON',
19:'HEBREUX',
20:'JACQUES',
21:'1-PIERRE',
22:'2-PIERRE',
23:'1-JEAN',
24:'2-JEAN',
25:'3-JEAN',
26:'JUDAS',
27:'APOCALYPSE' }






//FILE
file	= require('fs');



//SEBASTIEN
require('../database/bible/francais/sebastien/sebastien_brut.js');
require('../database/bible/francais/sebastien/sebastien_net.js');

body = '';

//LIVRE
for (livre = 1 ; livre != 28 ; livre++)
{

	//CHAPITRE
	for (chapitre = 1 ; chapitre != sebastien_brut[livre].length ; chapitre++)
	{
		
		
		//VERSET
		for (verset = 1 ; verset != sebastien_brut[livre][chapitre].length ; verset++)
		{
			
			verset_sebastien_brut	= sebastien_brut[livre][chapitre][verset].split('#').join(' ').replace(/\s+/g,' ');
			verset_sebastien_net	= sebastien_net[livre][chapitre][verset];
		
			verset_sebastien_brut_n	= '';
			verset_sebastien_net_n	= '';
		
			lcv = index_nb_name[livre]+':'+chapitre+':'+verset;


			if ( verset_sebastien_net != '')
			{
				
				
				if (verset_sebastien_brut != verset_sebastien_net)
				{
					
					
					
					//MOT
					brut_mot	= verset_sebastien_brut.match(/\S+/g);
					net_mot		= verset_sebastien_net.match(/\S+/g);
					
					maxmots = Math.max(brut_mot.length,net_mot.length);
					
					for (s = 0 ; s != maxmots ; s++)
					{
							
						if (brut_mot[s] != net_mot[s])
						{
							if (brut_mot[s])
								verset_sebastien_brut_n	+= '<span style="background-color: #ffd7ff;">'+brut_mot[s]+'</span> ';
							
							if (net_mot[s])
							verset_sebastien_net_n	+=  '<span style="background-color: #ffd7ff;">'+net_mot[s]+'</span> ';
					
						}
						else
						{
							if (brut_mot[s])
								verset_sebastien_brut_n	+= brut_mot[s]+' ';
							
							if (net_mot[s])
								verset_sebastien_net_n	+= net_mot[s]+' ';
						}
						
						
						
					}
					
					body += '<tr><td>'+lcv+'</td><td>'+verset_sebastien_brut_n+'</td><td>'+verset_sebastien_net_n+'</td></tr>'
					
				}
			}
		
		}
		
		
	}
	
}


html_top = `
<style type="text/css">

body{font-family: monospace;}
</style>
<body>
`;


file.writeFileSync('comparateur.html',html_top+'<table border="1" width="100%"><tbody>'+body+'</tbody></table></body>', 'utf8');