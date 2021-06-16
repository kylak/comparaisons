



//FILE
fs		= require('fs');
read	= require('fs');
write	= require('fs');



book = {
1:'MATTHIEU',
2:'MARC',
3:'LUC',
4:'JEAN',
5:'ACTES',
6:'ROMAINS',
7:'1 CORINTHIENS',
8:'2 CORINTHIENS',
9:'GALATES',
10:'EPHESIENS',
11:'PHILIPPIENS',
12:'COLOSSIENS',
13:'1 THESSALONICIENS',
14:'2 THESSALONICIENS',
15:'1 TIMOTHEE',
16:'2 TIMOTHEE',
17:'TITE',
18:'PHILEMON',
19:'HEBREUX',
20:'JACQUES',
21:'1 PIERRE',
22:'2 PIERRE',
23:'1 JEAN',
24:'2 JEAN',
25:'3 JEAN',
26:'JUDAS',
27:'APOCALYPSE'
}



//	-- BIBLES --

require('../database/bible/grec/p1/p1.js');
require('../database/bible/grec/p4/p4.js');
require('../database/bible/grec/p5/p5.js');
require('../database/bible/grec/p6/p6.js');
require('../database/bible/grec/p8/p8.js');
require('../database/bible/grec/p9/p9.js');
require('../database/bible/grec/p13/p13.js');
require('../database/bible/grec/p15/p15.js');
require('../database/bible/grec/p16/p16.js');
require('../database/bible/grec/p17/p17.js');
require('../database/bible/grec/p18/p18.js');
require('../database/bible/grec/p19/p19.js');
require('../database/bible/grec/p20/p20.js');
require('../database/bible/grec/p21/p21.js');
require('../database/bible/grec/p22/p22.js');
require('../database/bible/grec/p23/p23.js');
require('../database/bible/grec/p24/p24.js');
require('../database/bible/grec/p25/p25.js');
require('../database/bible/grec/p27/p27.js');
require('../database/bible/grec/p28/p28.js');
require('../database/bible/grec/p29/p29.js');
require('../database/bible/grec/p30/p30.js');
require('../database/bible/grec/p32/p32.js');
require('../database/bible/grec/p35/p35.js');
require('../database/bible/grec/p37/p37.js');
require('../database/bible/grec/p38/p38.js');
require('../database/bible/grec/p39/p39.js');
require('../database/bible/grec/p40/p40.js');
require('../database/bible/grec/p45/p45.js');
require('../database/bible/grec/p46/p46.js');
require('../database/bible/grec/p47/p47.js');
require('../database/bible/grec/p48/p48.js');
require('../database/bible/grec/p49/p49.js');
require('../database/bible/grec/p51/p51.js');
require('../database/bible/grec/p52/p52.js');
require('../database/bible/grec/p53/p53.js');
require('../database/bible/grec/p57/p57.js');
require('../database/bible/grec/p64/p64.js');
require('../database/bible/grec/p65/p65.js');
require('../database/bible/grec/p66/p66.js');
require('../database/bible/grec/p67/p67.js');
require('../database/bible/grec/p69/p69.js');
require('../database/bible/grec/p70/p70.js');
require('../database/bible/grec/p71/p71.js');
require('../database/bible/grec/p72/p72.js');
require('../database/bible/grec/p75/p75.js');
require('../database/bible/grec/p77/p77.js');
require('../database/bible/grec/p81/p81.js');
require('../database/bible/grec/p82/p82.js');
require('../database/bible/grec/p85/p85.js');
require('../database/bible/grec/p86/p86.js');
require('../database/bible/grec/p87/p87.js');
require('../database/bible/grec/p88/p88.js');
require('../database/bible/grec/p89/p89.js');
require('../database/bible/grec/p90/p90.js');
require('../database/bible/grec/p91/p91.js');
require('../database/bible/grec/p92/p92.js');
require('../database/bible/grec/p95/p95.js');
require('../database/bible/grec/p98/p98.js');
require('../database/bible/grec/p100/p100.js');
require('../database/bible/grec/p101/p101.js');
require('../database/bible/grec/p102/p102.js');
require('../database/bible/grec/p103/p103.js');
require('../database/bible/grec/p104/p104.js');
require('../database/bible/grec/p106/p106.js');
require('../database/bible/grec/p107/p107.js');
require('../database/bible/grec/p108/p108.js');
require('../database/bible/grec/p109/p109.js');
require('../database/bible/grec/p110/p110.js');
require('../database/bible/grec/p111/p111.js');
require('../database/bible/grec/p113/p113.js');
require('../database/bible/grec/p114/p114.js');
require('../database/bible/grec/p115/p115.js');
require('../database/bible/grec/p116/p116.js');
require('../database/bible/grec/p117/p117.js');
require('../database/bible/grec/p118/p118.js');
require('../database/bible/grec/p119/p119.js');
require('../database/bible/grec/p120/p120.js');
require('../database/bible/grec/p121/p121.js');
require('../database/bible/grec/p122/p122.js');
require('../database/bible/grec/p123/p123.js');
require('../database/bible/grec/p125/p125.js');
require('../database/bible/grec/p126/p126.js');
require('../database/bible/grec/p132/p132.js');
require('../database/bible/grec/p133/p133.js');
require('../database/bible/grec/p134/p134.js');
require('../database/bible/grec/p137/p137.js');
require('../database/bible/grec/p138/p138.js');
require('../database/bible/grec/p139/p139.js');

require('../database/bible/grec/ga01/ga01a.js');
require('../database/bible/grec/ga01/ga01b.js');
require('../database/bible/grec/ga01/ga01c.js');
require('../database/bible/grec/ga01/ga01d.js');
require('../database/bible/grec/ga02/ga02a.js');
require('../database/bible/grec/ga02/ga02b.js');
require('../database/bible/grec/ga02/ga02c.js');
require('../database/bible/grec/ga03/ga03a.js');
require('../database/bible/grec/ga03/ga03b.js');
require('../database/bible/grec/ga03/ga03c.js');
require('../database/bible/grec/ga03/ga03d.js');
require('../database/bible/grec/ga04/ga04a.js');
require('../database/bible/grec/ga04/ga04b.js');
require('../database/bible/grec/ga04/ga04c.js');
require('../database/bible/grec/ga04/ga04d.js');
require('../database/bible/grec/ga05/ga05a.js');
require('../database/bible/grec/ga05/ga05b.js');
require('../database/bible/grec/ga05/ga05c.js');
require('../database/bible/grec/ga32/ga32a.js');
require('../database/bible/grec/ga32/ga32b.js');

require('../database/bible/grec/seb/sebastien_lemme.js');
require('../database/bible/grec/na28/na28.js');
require('../database/bible/grec/sbl/sbl.js');
require('../database/bible/grec/tisch/tisch.js');
require('../database/bible/grec/wh/wha.js');

require('../database/bible/critique/critique.js');

require('../database/bible/francais/sebastien/sebastien_brut.js');

//livre
for (livre = 1 ; livre != 28 ; livre++)
{
	//get book name
	book_name=book[livre];


	if (!p1[livre]) {p1[livre] = [];}
	if (!p4[livre]) {p4[livre] = [];}
	if (!p5[livre]) {p5[livre] = [];}
	if (!p6[livre]) {p6[livre] = [];}
	if (!p8[livre]) {p8[livre] = [];}
	if (!p9[livre]) {p9[livre] = [];}
	if (!p13[livre]) {p13[livre] = [];}
	if (!p15[livre]) {p15[livre] = [];}
	if (!p16[livre]) {p16[livre] = [];}
	if (!p17[livre]) {p17[livre] = [];}
	if (!p18[livre]) {p18[livre] = [];}
	if (!p19[livre]) {p19[livre] = [];}
	if (!p20[livre]) {p20[livre] = [];}
	if (!p21[livre]) {p21[livre] = [];}
	if (!p22[livre]) {p22[livre] = [];}
	if (!p23[livre]) {p23[livre] = [];}
	if (!p24[livre]) {p24[livre] = [];}
	if (!p25[livre]) {p25[livre] = [];}
	if (!p27[livre]) {p27[livre] = [];}
	if (!p28[livre]) {p28[livre] = [];}
	if (!p29[livre]) {p29[livre] = [];}
	if (!p30[livre]) {p30[livre] = [];}
	if (!p32[livre]) {p32[livre] = [];}
	if (!p35[livre]) {p35[livre] = [];}
	if (!p37[livre]) {p37[livre] = [];}
	if (!p38[livre]) {p38[livre] = [];}
	if (!p39[livre]) {p39[livre] = [];}
	if (!p40[livre]) {p40[livre] = [];}
	if (!p45[livre]) {p45[livre] = [];}
	if (!p46[livre]) {p46[livre] = [];}
	if (!p47[livre]) {p47[livre] = [];}
	if (!p48[livre]) {p48[livre] = [];}
	if (!p49[livre]) {p49[livre] = [];}
	if (!p51[livre]) {p51[livre] = [];}
	if (!p52[livre]) {p52[livre] = [];}
	if (!p53[livre]) {p53[livre] = [];}
	if (!p57[livre]) {p57[livre] = [];}
	if (!p64[livre]) {p64[livre] = [];}
	if (!p65[livre]) {p65[livre] = [];}
	if (!p66[livre]) {p66[livre] = [];}
	if (!p67[livre]) {p67[livre] = [];}
	if (!p69[livre]) {p69[livre] = [];}
	if (!p70[livre]) {p70[livre] = [];}
	if (!p71[livre]) {p71[livre] = [];}
	if (!p72[livre]) {p72[livre] = [];}
	if (!p75[livre]) {p75[livre] = [];}
	if (!p77[livre]) {p77[livre] = [];}
	if (!p81[livre]) {p81[livre] = [];}
	if (!p82[livre]) {p82[livre] = [];}
	if (!p85[livre]) {p85[livre] = [];}
	if (!p86[livre]) {p86[livre] = [];}
	if (!p87[livre]) {p87[livre] = [];}
	if (!p88[livre]) {p88[livre] = [];}
	if (!p89[livre]) {p89[livre] = [];}
	if (!p90[livre]) {p90[livre] = [];}
	if (!p91[livre]) {p91[livre] = [];}
	if (!p92[livre]) {p92[livre] = [];}
	if (!p95[livre]) {p95[livre] = [];}
	if (!p98[livre]) {p98[livre] = [];}
	if (!p100[livre]) {p100[livre] = [];}
	if (!p101[livre]) {p101[livre] = [];}
	if (!p102[livre]) {p102[livre] = [];}
	if (!p103[livre]) {p103[livre] = [];}
	if (!p104[livre]) {p104[livre] = [];}
	if (!p106[livre]) {p106[livre] = [];}
	if (!p107[livre]) {p107[livre] = [];}
	if (!p108[livre]) {p108[livre] = [];}
	if (!p109[livre]) {p109[livre] = [];}
	if (!p110[livre]) {p110[livre] = [];}
	if (!p111[livre]) {p111[livre] = [];}
	if (!p113[livre]) {p113[livre] = [];}
	if (!p114[livre]) {p114[livre] = [];}
	if (!p115[livre]) {p115[livre] = [];}
	if (!p116[livre]) {p116[livre] = [];}
	if (!p117[livre]) {p117[livre] = [];}
	if (!p118[livre]) {p118[livre] = [];}
	if (!p119[livre]) {p119[livre] = [];}
	if (!p120[livre]) {p120[livre] = [];}
	if (!p121[livre]) {p121[livre] = [];}
	if (!p122[livre]) {p122[livre] = [];}
	if (!p123[livre]) {p123[livre] = [];}
	if (!p125[livre]) {p125[livre] = [];}
	if (!p126[livre]) {p126[livre] = [];}
	if (!p132[livre]) {p132[livre] = [];}
	if (!p133[livre]) {p133[livre] = [];}
	if (!p134[livre]) {p134[livre] = [];}
	if (!p137[livre]) {p137[livre] = [];}
	if (!p138[livre]) {p138[livre] = [];}
	if (!p139[livre]) {p139[livre] = [];}

	if (!ga01a[livre]) {ga01a[livre] = [];}
	if (!ga01b[livre]) {ga01b[livre] = [];}
	if (!ga01c[livre]) {ga01c[livre] = [];}
	if (!ga01d[livre]) {ga01d[livre] = [];}

	if (!ga02a[livre]) {ga02a[livre] = [];}
	if (!ga02b[livre]) {ga02b[livre] = [];}
	if (!ga02c[livre]) {ga02c[livre] = [];}

	if (!ga03a[livre]) {ga03a[livre] = [];}
	if (!ga03b[livre]) {ga03b[livre] = [];}
	if (!ga03c[livre]) {ga03c[livre] = [];}
	if (!ga03d[livre]) {ga03d[livre] = [];}

	if (!ga04a[livre]) {ga04a[livre] = [];}
	if (!ga04b[livre]) {ga04b[livre] = [];}
	if (!ga04c[livre]) {ga04c[livre] = [];}
	if (!ga04d[livre]) {ga04d[livre] = [];}

	if (!ga05a[livre]) {ga05a[livre] = [];}
	if (!ga05b[livre]) {ga05b[livre] = [];}
	if (!ga05c[livre]) {ga05c[livre] = [];}

	if (!ga32a[livre]) {ga32a[livre] = [];}
	if (!ga32b[livre]) {ga32b[livre] = [];}

	
	
	
	
	maxchapitres	= Math.max(
								ga03a[livre].length,
								ga01a[livre].length,
								ga04a[livre].length,
								ga02a[livre].length,
								ga05a[livre].length,
								ga32a[livre].length,
								sebastien_lemme[livre].length,
								na28[livre].length
								);




	//chapitre
	for (chapitre = 1 ; chapitre != maxchapitres; chapitre++)
	{

		body='';
		
		
		if (!p1[livre][chapitre]) {p1[livre][chapitre] = [];}
		if (!p4[livre][chapitre]) {p4[livre][chapitre] = [];}
		if (!p5[livre][chapitre]) {p5[livre][chapitre] = [];}
		if (!p6[livre][chapitre]) {p6[livre][chapitre] = [];}
		if (!p8[livre][chapitre]) {p8[livre][chapitre] = [];}
		if (!p9[livre][chapitre]) {p9[livre][chapitre] = [];}
		if (!p13[livre][chapitre]) {p13[livre][chapitre] = [];}
		if (!p15[livre][chapitre]) {p15[livre][chapitre] = [];}
		if (!p16[livre][chapitre]) {p16[livre][chapitre] = [];}
		if (!p17[livre][chapitre]) {p17[livre][chapitre] = [];}
		if (!p18[livre][chapitre]) {p18[livre][chapitre] = [];}
		if (!p19[livre][chapitre]) {p19[livre][chapitre] = [];}
		if (!p20[livre][chapitre]) {p20[livre][chapitre] = [];}
		if (!p21[livre][chapitre]) {p21[livre][chapitre] = [];}
		if (!p22[livre][chapitre]) {p22[livre][chapitre] = [];}
		if (!p23[livre][chapitre]) {p23[livre][chapitre] = [];}
		if (!p24[livre][chapitre]) {p24[livre][chapitre] = [];}
		if (!p25[livre][chapitre]) {p25[livre][chapitre] = [];}
		if (!p27[livre][chapitre]) {p27[livre][chapitre] = [];}
		if (!p28[livre][chapitre]) {p28[livre][chapitre] = [];}
		if (!p29[livre][chapitre]) {p29[livre][chapitre] = [];}
		if (!p30[livre][chapitre]) {p30[livre][chapitre] = [];}
		if (!p32[livre][chapitre]) {p32[livre][chapitre] = [];}
		if (!p35[livre][chapitre]) {p35[livre][chapitre] = [];}
		if (!p37[livre][chapitre]) {p37[livre][chapitre] = [];}
		if (!p38[livre][chapitre]) {p38[livre][chapitre] = [];}
		if (!p39[livre][chapitre]) {p39[livre][chapitre] = [];}
		if (!p40[livre][chapitre]) {p40[livre][chapitre] = [];}
		if (!p45[livre][chapitre]) {p45[livre][chapitre] = [];}
		if (!p46[livre][chapitre]) {p46[livre][chapitre] = [];}
		if (!p47[livre][chapitre]) {p47[livre][chapitre] = [];}
		if (!p48[livre][chapitre]) {p48[livre][chapitre] = [];}
		if (!p49[livre][chapitre]) {p49[livre][chapitre] = [];}
		if (!p51[livre][chapitre]) {p51[livre][chapitre] = [];}
		if (!p52[livre][chapitre]) {p52[livre][chapitre] = [];}
		if (!p53[livre][chapitre]) {p53[livre][chapitre] = [];}
		if (!p57[livre][chapitre]) {p57[livre][chapitre] = [];}
		if (!p64[livre][chapitre]) {p64[livre][chapitre] = [];}
		if (!p65[livre][chapitre]) {p65[livre][chapitre] = [];}
		if (!p66[livre][chapitre]) {p66[livre][chapitre] = [];}
		if (!p67[livre][chapitre]) {p67[livre][chapitre] = [];}
		if (!p69[livre][chapitre]) {p69[livre][chapitre] = [];}
		if (!p70[livre][chapitre]) {p70[livre][chapitre] = [];}
		if (!p71[livre][chapitre]) {p71[livre][chapitre] = [];}
		if (!p72[livre][chapitre]) {p72[livre][chapitre] = [];}
		if (!p75[livre][chapitre]) {p75[livre][chapitre] = [];}
		if (!p77[livre][chapitre]) {p77[livre][chapitre] = [];}
		if (!p81[livre][chapitre]) {p81[livre][chapitre] = [];}
		if (!p82[livre][chapitre]) {p82[livre][chapitre] = [];}
		if (!p85[livre][chapitre]) {p85[livre][chapitre] = [];}
		if (!p86[livre][chapitre]) {p86[livre][chapitre] = [];}
		if (!p87[livre][chapitre]) {p87[livre][chapitre] = [];}
		if (!p88[livre][chapitre]) {p88[livre][chapitre] = [];}
		if (!p89[livre][chapitre]) {p89[livre][chapitre] = [];}
		if (!p90[livre][chapitre]) {p90[livre][chapitre] = [];}
		if (!p91[livre][chapitre]) {p91[livre][chapitre] = [];}
		if (!p92[livre][chapitre]) {p92[livre][chapitre] = [];}
		if (!p95[livre][chapitre]) {p95[livre][chapitre] = [];}
		if (!p98[livre][chapitre]) {p98[livre][chapitre] = [];}
		if (!p100[livre][chapitre]) {p100[livre][chapitre] = [];}
		if (!p101[livre][chapitre]) {p101[livre][chapitre] = [];}
		if (!p102[livre][chapitre]) {p102[livre][chapitre] = [];}
		if (!p103[livre][chapitre]) {p103[livre][chapitre] = [];}
		if (!p104[livre][chapitre]) {p104[livre][chapitre] = [];}
		if (!p106[livre][chapitre]) {p106[livre][chapitre] = [];}
		if (!p107[livre][chapitre]) {p107[livre][chapitre] = [];}
		if (!p108[livre][chapitre]) {p108[livre][chapitre] = [];}
		if (!p109[livre][chapitre]) {p109[livre][chapitre] = [];}
		if (!p110[livre][chapitre]) {p110[livre][chapitre] = [];}
		if (!p111[livre][chapitre]) {p111[livre][chapitre] = [];}
		if (!p113[livre][chapitre]) {p113[livre][chapitre] = [];}
		if (!p114[livre][chapitre]) {p114[livre][chapitre] = [];}
		if (!p115[livre][chapitre]) {p115[livre][chapitre] = [];}
		if (!p116[livre][chapitre]) {p116[livre][chapitre] = [];}
		if (!p117[livre][chapitre]) {p117[livre][chapitre] = [];}
		if (!p118[livre][chapitre]) {p118[livre][chapitre] = [];}
		if (!p119[livre][chapitre]) {p119[livre][chapitre] = [];}
		if (!p120[livre][chapitre]) {p120[livre][chapitre] = [];}
		if (!p121[livre][chapitre]) {p121[livre][chapitre] = [];}
		if (!p122[livre][chapitre]) {p122[livre][chapitre] = [];}
		if (!p123[livre][chapitre]) {p123[livre][chapitre] = [];}
		if (!p125[livre][chapitre]) {p125[livre][chapitre] = [];}
		if (!p126[livre][chapitre]) {p126[livre][chapitre] = [];}
		if (!p132[livre][chapitre]) {p132[livre][chapitre] = [];}
		if (!p133[livre][chapitre]) {p133[livre][chapitre] = [];}
		if (!p134[livre][chapitre]) {p134[livre][chapitre] = [];}
		if (!p137[livre][chapitre]) {p137[livre][chapitre] = [];}
		if (!p138[livre][chapitre]) {p138[livre][chapitre] = [];}
		if (!p139[livre][chapitre]) {p139[livre][chapitre] = [];}
		
		if (!ga01a[livre][chapitre]) {ga01a[livre][chapitre] = [];}
		if (!ga01b[livre][chapitre]) {ga01b[livre][chapitre] = [];}
		if (!ga01c[livre][chapitre]) {ga01c[livre][chapitre] = [];}
		if (!ga01d[livre][chapitre]) {ga01d[livre][chapitre] = [];}

		if (!ga02a[livre][chapitre]) {ga02a[livre][chapitre] = [];}
		if (!ga02b[livre][chapitre]) {ga02b[livre][chapitre] = [];}
		if (!ga02c[livre][chapitre]) {ga02c[livre][chapitre] = [];}

		if (!ga03a[livre][chapitre]) {ga03a[livre][chapitre] = [];}
		if (!ga03b[livre][chapitre]) {ga03b[livre][chapitre] = [];}
		if (!ga03c[livre][chapitre]) {ga03c[livre][chapitre] = [];}
		if (!ga03d[livre][chapitre]) {ga03d[livre][chapitre] = [];}

		if (!ga04a[livre][chapitre]) {ga04a[livre][chapitre] = [];}
		if (!ga04b[livre][chapitre]) {ga04b[livre][chapitre] = [];}
		if (!ga04c[livre][chapitre]) {ga04c[livre][chapitre] = [];}
		if (!ga04d[livre][chapitre]) {ga04d[livre][chapitre] = [];}

		if (!ga05a[livre][chapitre]) {ga05a[livre][chapitre] = [];}
		if (!ga05b[livre][chapitre]) {ga05b[livre][chapitre] = [];}
		if (!ga05c[livre][chapitre]) {ga05c[livre][chapitre] = [];}

		if (!ga32a[livre][chapitre]) {ga32a[livre][chapitre] = [];}
		if (!ga32b[livre][chapitre]) {ga32b[livre][chapitre] = [];}

		
		maxversets		= Math.max(
									ga03a[livre][chapitre].length,
									ga01a[livre][chapitre].length,
									ga04a[livre][chapitre].length,
									ga02a[livre][chapitre].length,
									ga05a[livre][chapitre].length,
									ga32a[livre][chapitre].length,
									sebastien_lemme[livre][chapitre].length,
									na28[livre][chapitre].length,
									sbl[livre][chapitre].length,
									tisch[livre][chapitre].length,
									wha[livre][chapitre].length
									);
		

		//verset
		for (verset = 1 ; verset != maxversets; verset++)
		{

			//L C V
			lcv = livre+' '+chapitre+' '+verset;
			//console.log(lcv)
			
			
			//SEBASTIEN
			seb_grec	= '';
			seb_lem		= '';
			//seb_morph	= '';
			seb_fr		= '';
			
			if (sebastien_lemme[livre][chapitre][verset] && sebastien_lemme[livre][chapitre][verset] != "")
			{	
				sebastien_a = sebastien_lemme[livre][chapitre][verset].match(/\S+/g);
				sebastien_b = sebastien_brut[livre][chapitre][verset].split('#');
				
				//Check
				if (sebastien_a.length != sebastien_b.length)
					console.log('SEB FR LENGTH != SEB GR LENGTH  --> '+sebastien_a.length+' '+sebastien_b.length)
				
				for (s = 0 ; s != sebastien_a.length ; s++)
				{
					seb_grec += '<td>'+sebastien_a[s].split('=')[0]+'</td>';
					seb_lem += '<td><a href="../lemme/'+sebastien_a[s].split('=')[1]+'.html">'+sebastien_a[s].split('=')[1]+'</a></td>';
					seb_fr += '<td>'+sebastien_b[s]+'</td>';

					//new morph
					//sgsm = sebastien_a[s].split('=')[2].split(',');
					//newmorph = '';
					//for (nbnas = 0 ; nbnas != sgsm.length ; nbnas++)
					//{
						//if (!sgsm[nbnas][1]) { console.log(sgsm[nbnas]) }
						//newmorph += sgsm[nbnas][0]+sgsm[nbnas][1]
					//}
					
					//seb_morph += newmorph+' ';
					
					
				}
				

				
			}
			
			
			
			
			
			//critique
			if (critique[livre][chapitre][verset] && critique[livre][chapitre][verset] != "")
				critique[livre][chapitre][verset] = critique[livre][chapitre][verset].replace(/<i>txt<\/i>/g,'<i>NA28</i>')
			
			
			
			
			//PAPYRUS
			
			mot_p1=[]
			if (p1[livre][chapitre][verset] && p1[livre][chapitre][verset] != "")
			  mot_p1=p1[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p4=[]
			if (p4[livre][chapitre][verset] && p4[livre][chapitre][verset] != "")
			  mot_p4=p4[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p5=[]
			if (p5[livre][chapitre][verset] && p5[livre][chapitre][verset] != "")
			  mot_p5=p5[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p6=[]
			if (p6[livre][chapitre][verset] && p6[livre][chapitre][verset] != "")
			  mot_p6=p6[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p8=[]
			if (p8[livre][chapitre][verset] && p8[livre][chapitre][verset] != "")
			  mot_p8=p8[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p9=[]
			if (p9[livre][chapitre][verset] && p9[livre][chapitre][verset] != "")
			  mot_p9=p9[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p13=[]
			if (p13[livre][chapitre][verset] && p13[livre][chapitre][verset] != "")
			  mot_p13=p13[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p15=[]
			if (p15[livre][chapitre][verset] && p15[livre][chapitre][verset] != "")
			  mot_p15=p15[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p16=[]
			if (p16[livre][chapitre][verset] && p16[livre][chapitre][verset] != "")
			  mot_p16=p16[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p17=[]
			if (p17[livre][chapitre][verset] && p17[livre][chapitre][verset] != "")
			  mot_p17=p17[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p18=[]
			if (p18[livre][chapitre][verset] && p18[livre][chapitre][verset] != "")
			  mot_p18=p18[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p19=[]
			if (p19[livre][chapitre][verset] && p19[livre][chapitre][verset] != "")
			  mot_p19=p19[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p20=[]
			if (p20[livre][chapitre][verset] && p20[livre][chapitre][verset] != "")
			  mot_p20=p20[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p21=[]
			if (p21[livre][chapitre][verset] && p21[livre][chapitre][verset] != "")
			  mot_p21=p21[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p22=[]
			if (p22[livre][chapitre][verset] && p22[livre][chapitre][verset] != "")
			  mot_p22=p22[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p23=[]
			if (p23[livre][chapitre][verset] && p23[livre][chapitre][verset] != "")
			  mot_p23=p23[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p24=[]
			if (p24[livre][chapitre][verset] && p24[livre][chapitre][verset] != "")
			  mot_p24=p24[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p25=[]
			if (p25[livre][chapitre][verset] && p25[livre][chapitre][verset] != "")
			  mot_p25=p25[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p27=[]
			if (p27[livre][chapitre][verset] && p27[livre][chapitre][verset] != "")
			  mot_p27=p27[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p28=[]
			if (p28[livre][chapitre][verset] && p28[livre][chapitre][verset] != "")
			  mot_p28=p28[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p29=[]
			if (p29[livre][chapitre][verset] && p29[livre][chapitre][verset] != "")
			  mot_p29=p29[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p30=[]
			if (p30[livre][chapitre][verset] && p30[livre][chapitre][verset] != "")
			  mot_p30=p30[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p32=[]
			if (p32[livre][chapitre][verset] && p32[livre][chapitre][verset] != "")
			  mot_p32=p32[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p35=[]
			if (p35[livre][chapitre][verset] && p35[livre][chapitre][verset] != "")
			  mot_p35=p35[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p37=[]
			if (p37[livre][chapitre][verset] && p37[livre][chapitre][verset] != "")
			  mot_p37=p37[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p38=[]
			if (p38[livre][chapitre][verset] && p38[livre][chapitre][verset] != "")
			  mot_p38=p38[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p39=[]
			if (p39[livre][chapitre][verset] && p39[livre][chapitre][verset] != "")
			  mot_p39=p39[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p40=[]
			if (p40[livre][chapitre][verset] && p40[livre][chapitre][verset] != "")
			  mot_p40=p40[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p45=[]
			if (p45[livre][chapitre][verset] && p45[livre][chapitre][verset] != "")
			  mot_p45=p45[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p46=[]
			if (p46[livre][chapitre][verset] && p46[livre][chapitre][verset] != "")
			  mot_p46=p46[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p47=[]
			if (p47[livre][chapitre][verset] && p47[livre][chapitre][verset] != "")
			  mot_p47=p47[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p48=[]
			if (p48[livre][chapitre][verset] && p48[livre][chapitre][verset] != "")
			  mot_p48=p48[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p49=[]
			if (p49[livre][chapitre][verset] && p49[livre][chapitre][verset] != "")
			  mot_p49=p49[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p51=[]
			if (p51[livre][chapitre][verset] && p51[livre][chapitre][verset] != "")
			  mot_p51=p51[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p52=[]
			if (p52[livre][chapitre][verset] && p52[livre][chapitre][verset] != "")
			  mot_p52=p52[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p53=[]
			if (p53[livre][chapitre][verset] && p53[livre][chapitre][verset] != "")
			  mot_p53=p53[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p57=[]
			if (p57[livre][chapitre][verset] && p57[livre][chapitre][verset] != "")
			  mot_p57=p57[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p64=[]
			if (p64[livre][chapitre][verset] && p64[livre][chapitre][verset] != "")
			  mot_p64=p64[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p65=[]
			if (p65[livre][chapitre][verset] && p65[livre][chapitre][verset] != "")
			  mot_p65=p65[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p66=[]
			if (p66[livre][chapitre][verset] && p66[livre][chapitre][verset] != "")
			  mot_p66=p66[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p67=[]
			if (p67[livre][chapitre][verset] && p67[livre][chapitre][verset] != "")
			  mot_p67=p67[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p69=[]
			if (p69[livre][chapitre][verset] && p69[livre][chapitre][verset] != "")
			  mot_p69=p69[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p70=[]
			if (p70[livre][chapitre][verset] && p70[livre][chapitre][verset] != "")
			  mot_p70=p70[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p71=[]
			if (p71[livre][chapitre][verset] && p71[livre][chapitre][verset] != "")
			  mot_p71=p71[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p72=[]
			if (p72[livre][chapitre][verset] && p72[livre][chapitre][verset] != "")
			  mot_p72=p72[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p75=[]
			if (p75[livre][chapitre][verset] && p75[livre][chapitre][verset] != "")
			  mot_p75=p75[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p77=[]
			if (p77[livre][chapitre][verset] && p77[livre][chapitre][verset] != "")
			  mot_p77=p77[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p81=[]
			if (p81[livre][chapitre][verset] && p81[livre][chapitre][verset] != "")
			  mot_p81=p81[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p82=[]
			if (p82[livre][chapitre][verset] && p82[livre][chapitre][verset] != "")
			  mot_p82=p82[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p85=[]
			if (p85[livre][chapitre][verset] && p85[livre][chapitre][verset] != "")
			  mot_p85=p85[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p86=[]
			if (p86[livre][chapitre][verset] && p86[livre][chapitre][verset] != "")
			  mot_p86=p86[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p87=[]
			if (p87[livre][chapitre][verset] && p87[livre][chapitre][verset] != "")
			  mot_p87=p87[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p88=[]
			if (p88[livre][chapitre][verset] && p88[livre][chapitre][verset] != "")
			  mot_p88=p88[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p89=[]
			if (p89[livre][chapitre][verset] && p89[livre][chapitre][verset] != "")
			  mot_p89=p89[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p90=[]
			if (p90[livre][chapitre][verset] && p90[livre][chapitre][verset] != "")
			  mot_p90=p90[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p91=[]
			if (p91[livre][chapitre][verset] && p91[livre][chapitre][verset] != "")
			  mot_p91=p91[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p92=[]
			if (p92[livre][chapitre][verset] && p92[livre][chapitre][verset] != "")
			  mot_p92=p92[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p95=[]
			if (p95[livre][chapitre][verset] && p95[livre][chapitre][verset] != "")
			  mot_p95=p95[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p98=[]
			if (p98[livre][chapitre][verset] && p98[livre][chapitre][verset] != "")
			  mot_p98=p98[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p100=[]
			if (p100[livre][chapitre][verset] && p100[livre][chapitre][verset] != "")
			  mot_p100=p100[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p101=[]
			if (p101[livre][chapitre][verset] && p101[livre][chapitre][verset] != "")
			  mot_p101=p101[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p102=[]
			if (p102[livre][chapitre][verset] && p102[livre][chapitre][verset] != "")
			  mot_p102=p102[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p103=[]
			if (p103[livre][chapitre][verset] && p103[livre][chapitre][verset] != "")
			  mot_p103=p103[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p104=[]
			if (p104[livre][chapitre][verset] && p104[livre][chapitre][verset] != "")
			  mot_p104=p104[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p106=[]
			if (p106[livre][chapitre][verset] && p106[livre][chapitre][verset] != "")
			  mot_p106=p106[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p107=[]
			if (p107[livre][chapitre][verset] && p107[livre][chapitre][verset] != "")
			  mot_p107=p107[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p108=[]
			if (p108[livre][chapitre][verset] && p108[livre][chapitre][verset] != "")
			  mot_p108=p108[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p109=[]
			if (p109[livre][chapitre][verset] && p109[livre][chapitre][verset] != "")
			  mot_p109=p109[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p110=[]
			if (p110[livre][chapitre][verset] && p110[livre][chapitre][verset] != "")
			  mot_p110=p110[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p111=[]
			if (p111[livre][chapitre][verset] && p111[livre][chapitre][verset] != "")
			  mot_p111=p111[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p113=[]
			if (p113[livre][chapitre][verset] && p113[livre][chapitre][verset] != "")
			  mot_p113=p113[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p114=[]
			if (p114[livre][chapitre][verset] && p114[livre][chapitre][verset] != "")
			  mot_p114=p114[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p115=[]
			if (p115[livre][chapitre][verset] && p115[livre][chapitre][verset] != "")
			  mot_p115=p115[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p116=[]
			if (p116[livre][chapitre][verset] && p116[livre][chapitre][verset] != "")
			  mot_p116=p116[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p117=[]
			if (p117[livre][chapitre][verset] && p117[livre][chapitre][verset] != "")
			  mot_p117=p117[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p118=[]
			if (p118[livre][chapitre][verset] && p118[livre][chapitre][verset] != "")
			  mot_p118=p118[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p119=[]
			if (p119[livre][chapitre][verset] && p119[livre][chapitre][verset] != "")
			  mot_p119=p119[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p120=[]
			if (p120[livre][chapitre][verset] && p120[livre][chapitre][verset] != "")
			  mot_p120=p120[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p121=[]
			if (p121[livre][chapitre][verset] && p121[livre][chapitre][verset] != "")
			  mot_p121=p121[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p122=[]
			if (p122[livre][chapitre][verset] && p122[livre][chapitre][verset] != "")
			  mot_p122=p122[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p123=[]
			if (p123[livre][chapitre][verset] && p123[livre][chapitre][verset] != "")
			  mot_p123=p123[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p125=[]
			if (p125[livre][chapitre][verset] && p125[livre][chapitre][verset] != "")
			  mot_p125=p125[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p126=[]
			if (p126[livre][chapitre][verset] && p126[livre][chapitre][verset] != "")
			  mot_p126=p126[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p132=[]
			if (p132[livre][chapitre][verset] && p132[livre][chapitre][verset] != "")
			  mot_p132=p132[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p133=[]
			if (p133[livre][chapitre][verset] && p133[livre][chapitre][verset] != "")
			  mot_p133=p133[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p134=[]
			if (p134[livre][chapitre][verset] && p134[livre][chapitre][verset] != "")
			  mot_p134=p134[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p137=[]
			if (p137[livre][chapitre][verset] && p137[livre][chapitre][verset] != "")
			  mot_p137=p137[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p138=[]
			if (p138[livre][chapitre][verset] && p138[livre][chapitre][verset] != "")
			  mot_p138=p138[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_p139=[]
			if (p139[livre][chapitre][verset] && p139[livre][chapitre][verset] != "")
			  mot_p139=p139[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			
			
			
			
			
			
			

			//GA01 SPLIT
			mot_ga01a=[]
			if (ga01a[livre][chapitre][verset] && ga01a[livre][chapitre][verset] != "")
				mot_ga01a=ga01a[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			mot_ga01b=[]
			if (ga01b[livre][chapitre][verset] && ga01b[livre][chapitre][verset] != "")
				mot_ga01b=ga01b[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			mot_ga01c=[]
			if (ga01c[livre][chapitre][verset] && ga01c[livre][chapitre][verset] != "")
				mot_ga01c=ga01c[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
				
			mot_ga01d=[]
			if (ga01d[livre][chapitre][verset] && ga01d[livre][chapitre][verset] != "")
				mot_ga01d=ga01d[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			
			
			//GA02 SPLIT
			mot_ga02a=[]
			if (ga02a[livre][chapitre][verset] && ga02a[livre][chapitre][verset] != "")
				mot_ga02a=ga02a[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			mot_ga02b=[]
			if (ga02b[livre][chapitre][verset] && ga02b[livre][chapitre][verset] != "")
				mot_ga02b=ga02b[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			mot_ga02c=[]
			if (ga02c[livre][chapitre][verset] && ga02c[livre][chapitre][verset] != "")
				mot_ga02c=ga02c[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			
			//GA03 SPLIT
			mot_ga03a=[]
			if (ga03a[livre][chapitre][verset] && ga03a[livre][chapitre][verset] != "")
				mot_ga03a=ga03a[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			mot_ga03b=[]
			if (ga03b[livre][chapitre][verset] && ga03b[livre][chapitre][verset] != "")
				mot_ga03b=ga03b[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
				
			mot_ga03c=[]
			if (ga03c[livre][chapitre][verset] && ga03c[livre][chapitre][verset] != "")
				mot_ga03c=ga03c[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
				
			mot_ga03d=[]
			if (ga03d[livre][chapitre][verset] && ga03d[livre][chapitre][verset] != "")
				mot_ga03d=ga03d[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			
			//GA04 SPLIT
			mot_ga04a=[]
			if (ga04a[livre][chapitre][verset] && ga04a[livre][chapitre][verset] != "")
				mot_ga04a=ga04a[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			mot_ga04b=[]
			if (ga04b[livre][chapitre][verset] && ga04b[livre][chapitre][verset] != "")
				mot_ga04b=ga04b[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
				
			mot_ga04c=[]
			if (ga04c[livre][chapitre][verset] && ga04c[livre][chapitre][verset] != "")
				mot_ga04c=ga04c[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
				
			mot_ga04d=[]
			if (ga04d[livre][chapitre][verset] && ga04d[livre][chapitre][verset] != "")
				mot_ga04d=ga04d[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			
			
			//GA05 SPLIT
			mot_ga05a=[]
			if (ga05a[livre][chapitre][verset] && ga05a[livre][chapitre][verset] != "")
				mot_ga05a=ga05a[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			mot_ga05b=[]
			if (ga05b[livre][chapitre][verset] && ga05b[livre][chapitre][verset] != "")
				mot_ga05b=ga05b[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
				
			mot_ga05c=[]
			if (ga05c[livre][chapitre][verset] && ga05c[livre][chapitre][verset] != "")
				mot_ga05c=ga05c[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
				

			//GA32 SPLIT
			mot_ga32a=[]
			if (ga32a[livre][chapitre][verset] && ga32a[livre][chapitre][verset] != "")
				mot_ga32a=ga32a[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			mot_ga32b=[]
			if (ga32b[livre][chapitre][verset] && ga32b[livre][chapitre][verset] != "")
				mot_ga32b=ga32b[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			
			







			//NA28 SPLIT
			mot_na28=[]
			if (na28[livre][chapitre][verset] && na28[livre][chapitre][verset] != "")
				mot_na28=na28[livre][chapitre][verset].replace(/\s+/g,'</td><td>');

			
			//SBL SPLIT
			mot_sbl=[]
			if (sbl[livre][chapitre][verset] && sbl[livre][chapitre][verset] != "")
				mot_sbl=sbl[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
				
				
			//TISCH SPLIT
			mot_tisch=[]
			if (tisch[livre][chapitre][verset] && tisch[livre][chapitre][verset] != "")
				mot_tisch=tisch[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
				
				
			//WH SPLIT
			mot_wha=[]
			if (wha[livre][chapitre][verset] && wha[livre][chapitre][verset] != "")
				mot_wha=wha[livre][chapitre][verset].replace(/\s+/g,'</td><td>');
			


lch = livre+'-'+chapitre+'.html#v'+verset;




body+=`\
<div id="v`+verset+`"></div>
<a href="#a">Δ </a><span class="b">VERSET `+verset+`</span>&ensp;&ensp;<a target="_blank" href="../comparer-grec-image/`+lch+`">IMG</a>&ensp;<a href="../comparer-francais/`+lch+`">FRA</a>

<table cellpadding="2" cellspacing="0"><tbody>





<tr><td class="td1">PA. 001</td><td class="td2">300</td>
<td>`+mot_p1+`</td></tr>
<tr><td class="td1">PA. 004</td><td class="td2">300</td>
<td>`+mot_p4+`</td></tr>
<tr><td class="td1">PA. 005</td><td class="td2">300</td>
<td>`+mot_p5+`</td></tr>
<tr><td class="td1">PA. 006</td><td class="td2">400</td>
<td>`+mot_p6+`</td></tr>
<tr><td class="td1">PA. 008</td><td class="td2">400</td>
<td>`+mot_p8+`</td></tr>
<tr><td class="td1">PA. 009</td><td class="td2">300</td>
<td>`+mot_p9+`</td></tr>



<tr><td class="td1">PA. 013</td><td class="td2">400</td>
<td>`+mot_p13+`</td></tr>
<tr><td class="td1">PA. 015</td><td class="td2">300</td>
<td>`+mot_p15+`</td></tr>
<tr><td class="td1">PA. 016</td><td class="td2">400</td>
<td>`+mot_p16+`</td></tr>
<tr><td class="td1">PA. 017</td><td class="td2">400</td>
<td>`+mot_p17+`</td></tr>
<tr><td class="td1">PA. 018</td><td class="td2">400</td>
<td>`+mot_p18+`</td></tr>
<tr><td class="td1">PA. 019</td><td class="td2">500</td>
<td>`+mot_p19+`</td></tr>
<tr><td class="td1">PA. 020</td><td class="td2">300</td>
<td>`+mot_p20+`</td></tr>
<tr><td class="td1">PA. 021</td><td class="td2">500</td>
<td>`+mot_p21+`</td></tr>
<tr><td class="td1">PA. 022</td><td class="td2">300</td>
<td>`+mot_p22+`</td></tr>
<tr><td class="td1">PA. 023</td><td class="td2">225</td>
<td>`+mot_p23+`</td></tr>
<tr><td class="td1">PA. 024</td><td class="td2">400</td>
<td>`+mot_p24+`</td></tr>
<tr><td class="td1">PA. 025</td><td class="td2">400</td>
<td>`+mot_p25+`</td></tr>
<tr><td class="td1">PA. 027</td><td class="td2">300</td>
<td>`+mot_p27+`</td></tr>
<tr><td class="td1">PA. 028</td><td class="td2">300</td>
<td>`+mot_p28+`</td></tr>
<tr><td class="td1">PA. 029</td><td class="td2">300</td>
<td>`+mot_p29+`</td></tr>
<tr><td class="td1">PA. 030</td><td class="td2">300</td>
<td>`+mot_p30+`</td></tr>
<tr><td class="td1">PA. 032</td><td class="td2">225</td>
<td>`+mot_p32+`</td></tr>
<tr><td class="td1">PA. 035</td><td class="td2">600</td>
<td>`+mot_p35+`</td></tr>
<tr><td class="td1">PA. 037</td><td class="td2">400</td>
<td>`+mot_p37+`</td></tr>
<tr><td class="td1">PA. 038</td><td class="td2">325</td>
<td>`+mot_p38+`</td></tr>
<tr><td class="td1">PA. 039</td><td class="td2">300</td>
<td>`+mot_p39+`</td></tr>
<tr><td class="td1">PA. 040</td><td class="td2">300</td>
<td>`+mot_p40+`</td></tr>
<tr><td class="td1">PA. 045</td><td class="td2">300</td>
<td>`+mot_p45+`</td></tr>
<tr><td class="td1">PA. 046</td><td class="td2">225</td>
<td>`+mot_p46+`</td></tr>
<tr><td class="td1">PA. 047</td><td class="td2">300</td>
<td>`+mot_p47+`</td></tr>
<tr><td class="td1">PA. 048</td><td class="td2">300</td>
<td>`+mot_p48+`</td></tr>
<tr><td class="td1">PA. 049</td><td class="td2">300</td>
<td>`+mot_p49+`</td></tr>
<tr><td class="td1">PA. 051</td><td class="td2">425</td>
<td>`+mot_p51+`</td></tr>
<tr><td class="td1">PA. 052</td><td class="td2">175</td>
<td>`+mot_p52+`</td></tr>
<tr><td class="td1">PA. 053</td><td class="td2">300</td>
<td>`+mot_p53+`</td></tr>
<tr><td class="td1">PA. 057</td><td class="td2">500</td>
<td>`+mot_p57+`</td></tr>
<tr><td class="td1">PA. 064</td><td class="td2">225</td>
<td>`+mot_p64+`</td></tr>
<tr><td class="td1">PA. 065</td><td class="td2">300</td>
<td>`+mot_p65+`</td></tr>
<tr><td class="td1">PA. 066</td><td class="td2">225</td>
<td>`+mot_p66+`</td></tr>
<tr><td class="td1">PA. 067</td><td class="td2">225</td>
<td>`+mot_p67+`</td></tr>
<tr><td class="td1">PA. 069</td><td class="td2">300</td>
<td>`+mot_p69+`</td></tr>
<tr><td class="td1">PA. 070</td><td class="td2">300</td>
<td>`+mot_p70+`</td></tr>
<tr><td class="td1">PA. 071</td><td class="td2">400</td>
<td>`+mot_p71+`</td></tr>
<tr><td class="td1">PA. 072</td><td class="td2">400</td>
<td>`+mot_p72+`</td></tr>
<tr><td class="td1">PA. 075</td><td class="td2">225</td>
<td>`+mot_p75+`</td></tr>
<tr><td class="td1">PA. 077</td><td class="td2">300</td>
<td>`+mot_p77+`</td></tr>
<tr><td class="td1">PA. 081</td><td class="td2">400</td>
<td>`+mot_p81+`</td></tr>
<tr><td class="td1">PA. 082</td><td class="td2">500</td>
<td>`+mot_p82+`</td></tr>
<tr><td class="td1">PA. 085</td><td class="td2">500</td>
<td>`+mot_p85+`</td></tr>
<tr><td class="td1">PA. 086</td><td class="td2">400</td>
<td>`+mot_p86+`</td></tr>
<tr><td class="td1">PA. 087</td><td class="td2">300</td>
<td>`+mot_p87+`</td></tr>
<tr><td class="td1">PA. 088</td><td class="td2">400</td>
<td>`+mot_p88+`</td></tr>
<tr><td class="td1">PA. 089</td><td class="td2">400</td>
<td>`+mot_p89+`</td></tr>
<tr><td class="td1">PA. 090</td><td class="td2">200</td>
<td>`+mot_p90+`</td></tr>
<tr><td class="td1">PA. 091</td><td class="td2">300</td>
<td>`+mot_p91+`</td></tr>
<tr><td class="td1">PA. 092</td><td class="td2">400</td>
<td>`+mot_p92+`</td></tr>
<tr><td class="td1">PA. 095</td><td class="td2">300</td>
<td>`+mot_p95+`</td></tr>
<tr><td class="td1">PA. 098</td><td class="td2">250</td>
<td>`+mot_p98+`</td></tr>


<tr><td class="td1">PA. 100</td><td class="td2">400</td>
<td>`+mot_p100+`</td></tr>
<tr><td class="td1">PA. 101</td><td class="td2">300</td>
<td>`+mot_p101+`</td></tr>
<tr><td class="td1">PA. 102</td><td class="td2">400</td>
<td>`+mot_p102+`</td></tr>
<tr><td class="td1">PA. 103</td><td class="td2">300</td>
<td>`+mot_p103+`</td></tr>
<tr><td class="td1">PA. 104</td><td class="td2">200</td>
<td>`+mot_p104+`</td></tr>
<tr><td class="td1">PA. 106</td><td class="td2">300</td>
<td>`+mot_p106+`</td></tr>
<tr><td class="td1">PA. 107</td><td class="td2">300</td>
<td>`+mot_p107+`</td></tr>
<tr><td class="td1">PA. 108</td><td class="td2">300</td>
<td>`+mot_p108+`</td></tr>
<tr><td class="td1">PA. 109</td><td class="td2">300</td>
<td>`+mot_p109+`</td></tr>
<tr><td class="td1">PA. 110</td><td class="td2">400</td>
<td>`+mot_p110+`</td></tr>
<tr><td class="td1">PA. 111</td><td class="td2">300</td>
<td>`+mot_p111+`</td></tr>
<tr><td class="td1">PA. 113</td><td class="td2">300</td>
<td>`+mot_p113+`</td></tr>
<tr><td class="td1">PA. 114</td><td class="td2">300</td>
<td>`+mot_p114+`</td></tr>
<tr><td class="td1">PA. 115</td><td class="td2">400</td>
<td>`+mot_p115+`</td></tr>
<tr><td class="td1">PA. 116</td><td class="td2">700</td>
<td>`+mot_p116+`</td></tr>
<tr><td class="td1">PA. 117</td><td class="td2">500</td>
<td>`+mot_p117+`</td></tr>
<tr><td class="td1">PA. 118</td><td class="td2">300</td>
<td>`+mot_p118+`</td></tr>
<tr><td class="td1">PA. 119</td><td class="td2">300</td>
<td>`+mot_p119+`</td></tr>
<tr><td class="td1">PA. 120</td><td class="td2">400</td>
<td>`+mot_p120+`</td></tr>
<tr><td class="td1">PA. 121</td><td class="td2">300</td>
<td>`+mot_p121+`</td></tr>
<tr><td class="td1">PA. 122</td><td class="td2">500</td>
<td>`+mot_p122+`</td></tr>
<tr><td class="td1">PA. 123</td><td class="td2">400</td>
<td>`+mot_p123+`</td></tr>
<tr><td class="td1">PA. 125</td><td class="td2">400</td>
<td>`+mot_p125+`</td></tr>
<tr><td class="td1">PA. 126</td><td class="td2">400</td>
<td>`+mot_p126+`</td></tr>
<tr><td class="td1">PA. 132</td><td class="td2">400</td>
<td>`+mot_p132+`</td></tr>
<tr><td class="td1">PA. 133</td><td class="td2">300</td>
<td>`+mot_p133+`</td></tr>
<tr><td class="td1">PA. 134</td><td class="td2">400</td>
<td>`+mot_p134+`</td></tr>
<tr><td class="td1">PA. 137</td><td class="td2">300</td>
<td>`+mot_p137+`</td></tr>
<tr><td class="td1">PA. 138</td><td class="td2">300</td>
<td>`+mot_p138+`</td></tr>
<tr><td class="td1">PA. 139</td><td class="td2">400</td>
<td>`+mot_p139+`</td></tr>





<tr><td class="td1">SIN01 A</td><td class="td2">360</td>
<td>`+mot_ga01a+`</td></tr>
<tr><td class="td1">SIN01 B</td><td class="td2">360</td>
<td>`+mot_ga01b+`</td></tr>
<tr><td class="td1">SIN01 C</td><td class="td2">360</td>
<td>`+mot_ga01c+`</td></tr>
<tr><td class="td1">SIN01 D</td><td class="td2">360</td>
<td>`+mot_ga01d+`</td></tr>

<tr><td class="td1">ALE02 A</td><td class="td2">440</td>
<td>`+mot_ga02a+`</td></tr>
<tr><td class="td1">ALE02 B</td><td class="td2">440</td>
<td>`+mot_ga02b+`</td></tr>
<tr><td class="td1">ALE02 C</td><td class="td2">440</td>
<td>`+mot_ga02c+`</td></tr>

<tr><td class="td1">VAT03 A</td><td class="td2">325</td>
<td>`+mot_ga03a+`</td></tr>
<tr><td class="td1">VAT03 B</td><td class="td2">325</td>
<td>`+mot_ga03b+`</td></tr>
<tr><td class="td1">VAT03 C</td><td class="td2">325</td>
<td>`+mot_ga03c+`</td></tr>
<tr><td class="td1">VAT03 D</td><td class="td2">325</td>
<td>`+mot_ga03d+`</td></tr>

<tr><td class="td1">EPH04 A</td><td class="td2">450</td>
<td>`+mot_ga04a+`</td></tr>
<tr><td class="td1">EPH04 B</td><td class="td2">450</td>
<td>`+mot_ga04b+`</td></tr>
<tr><td class="td1">EPH04 C</td><td class="td2">450</td>
<td>`+mot_ga04c+`</td></tr>
<tr><td class="td1">EPH04 D</td><td class="td2">450</td>
<td>`+mot_ga04d+`</td></tr>

<tr><td class="td1">BEZ05 A</td><td class="td2">450</td>
<td>`+mot_ga05a+`</td></tr>
<tr><td class="td1">BEZ05 B</td><td class="td2">450</td>
<td>`+mot_ga05b+`</td></tr>
<tr><td class="td1">BEZ05 C</td><td class="td2">450</td>
<td>`+mot_ga05c+`</td></tr>

<tr><td class="td1">WAS32 A</td><td class="td2">500</td>
<td>`+mot_ga32a+`</td></tr>
<tr><td class="td1">WAS32 B</td><td class="td2">500</td>
<td>`+mot_ga32b+`</td></tr>

<tr><td class="td1">SBL</td><td class="td2">2010</td>
<td>`+mot_sbl+`</td></tr>

<tr><td class="td1">TISCH</td><td class="td2">1869</td>
<td>`+mot_tisch+`</td></tr>

<tr><td class="td1">W. H.</td><td class="td2">1885</td>
<td>`+mot_wha+`</td></tr>



<tr><td class="td1">NA28</td><td class="td2">2012</td><td>`+mot_na28+`</td></tr>

<tr><td class="td1">SEB G.</td><td class="td2">2020</td>`+seb_grec+`</tr>
<tr><td class="td1">SEB L.</td><td class="td2">2020</td>`+seb_lem+`</tr>
<tr><td class="td1">SEB F.</td><td class="td2">2020</td>`+seb_fr+`</tr>

<tr><td class="td1">AC NA28</td><td class="td2">2012</td><td colspan="1000" class="td3">`+critique[livre][chapitre][verset]+`</td></tr>

</tbody></table><br>
`






}


//clean regex
body = body.replace(
/<tr><td class="td1">\S+(?: \S+){0,4}<\/td><td class="td2">[0-9]+<\/td>\s<td>(undefined|null|)<\/td><\/tr>/sgi,'');

body = body.replace(
/<tr><td class="td1">\S+(?: \S+){0,4}<\/td><td class="td2">[0-9]+<\/td><td colspan="1000" class="td3">null<\/td><\/tr>/sgi,'');



body = body.replace(
/<tr><td class="td1">\S+(?: \S+){0,4}<\/td><td class="td2">[0-9]+<\/td><td class="td3">\s<span class="pre">(undefined|null|\s+|)<\/span><\/td><\/tr>/sgi,'');

body = body.replace(/(\r\n|\n|\r)+/gm,"\n");



//add intro
intro_book=`<html id="a" xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>BIBLE GREC</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link href="style.css" rel="stylesheet">
</head><body><center>
<a href="1-1.html">MATTHIEU</a>&ensp;
<a href="2-1.html">MARC</a>&ensp;
<a href="3-1.html">LUC</a>&ensp;
<a href="4-1.html">JEAN</a>&ensp;
<a href="5-1.html">ACTES</a>&ensp;
<a href="6-1.html">ROMAINS</a>&ensp;
<a href="7-1.html">1 CORINTHIENS</a>&ensp;
<a href="8-1.html">2 CORINTHIENS</a>&ensp;
<a href="9-1.html">GALATES</a>&ensp;
<a href="10-1.html">EPHESIENS</a>&ensp;
<a href="11-1.html">PHILIPPIENS</a>&ensp;
<a href="12-1.html">COLOSSIENS</a>&ensp;
<a href="13-1.html">1 THESSALONICIENS</a>&ensp;
<a href="14-1.html">2 THESSALONICIENS</a>&ensp;
<a href="15-1.html">1 TIMOTHEE</a>&ensp;
<a href="16-1.html">2 TIMOTHEE</a>&ensp;
<a href="17-1.html">TITE</a>&ensp;
<a href="18-1.html">PHILEMON</a>&ensp;
<a href="19-1.html">HEBREUX</a>&ensp;
<a href="20-1.html">JACQUES</a>&ensp;
<a href="21-1.html">1 PIERRE</a>&ensp;
<a href="22-1.html">2 PIERRE</a>&ensp;
<a href="23-1.html">1 JEAN</a>&ensp;
<a href="24-1.html">2 JEAN</a>&ensp;
<a href="25-1.html">3 JEAN</a>&ensp;
<a href="26-1.html">JUDAS</a>&ensp;
<a href="27-1.html">APOCALYPSE</a></center><br><br>
<!-- Vous scrutez les écritures parce que vous pensez dans elles avoir la vie éternelle  -->
<!-- et celles-là sont les témoignantes d'autour de moi -->
<!-- et vous ne voulez pas venir vers moi afin que vous ayez la vie -->`;




end_book=`</body></html>`;





	//change actual book
	intro_book=intro_book.replace(book_name,'<font color="red">[\\ '+book_name+' /]</font>');


	//intro chap
	nb_chap=maxchapitres-1;
	intro_chap='';
	for (nb=0;nb!=nb_chap;nb++)
	{
		nb_for=nb+1;
		intro_chap+='<a href="'+livre+'-'+nb_for+'.html">CH.'+nb_for+'</a>&ensp;';
	}

	//change actual chapter
	intro_chap=intro_chap.replace('CH.'+chapitre,'<font color="red">[\\ CH. '+chapitre+' /]</font>')
	intro_chap+='<br><br>';


	//intro ver
	nb_ver=maxversets-1;
	intro_ver='';
	for (nb=0;nb!=nb_ver;nb++)
	{
		nb_for=nb+1;
		intro_ver+='<a href="#v'+nb_for+'">V.'+nb_for+'</a>&ensp;';
	}
	intro_ver+='<br><br>';


	//SEND --> N-book - N-chapitre .html
	fs.writeFileSync(livre+'-'+chapitre+'.html',intro_book+intro_chap+intro_ver+body+end_book, 'utf8');

	}

}
