
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
13:'1 TESSALONICIENS',
14:'2 TESSALONICIENS',
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


tablegrec = {
'Α':'A',
'α':'a',
'Β':'B',
'β':'b',
'Γ':'G',
'γ':'g',
'Δ':'D',
'δ':'d',
'Ε':'E',
'ε':'e',
'Ζ':'Z',
'ζ':'z',
'Η':'E',
'η':'e',
'Θ':'Th',
'θ':'th',
'Ι':'I',
'ι':'i',
'Κ':'K',
'κ':'k',
'Λ':'L',
'λ':'l',
'Μ':'M',
'μ':'m',
'Ν':'N',
'ν':'n',
'Ξ':'Ks',
'ξ':'ks',
'Ο':'O',
'ο':'o',
'Π':'P',
'π':'p',
'Ρ':'R',
'ρ':'r',
'Σ':'S',
'σ':'s',
'ς':'s',
'Τ':'T',
'τ':'t',
'Υ':'Y',
'υ':'u',
'Φ':'F',
'φ':'f',
'Χ':'Ch',
'χ':'ch',
'Ψ':'Ps',
'ψ':'ps',
'Ω':'O',
'ω':'o',
'-':'-',
'–':'–',
' ':' '}

function grectofrench(grw) {
	

	grw=grw.split('');
	send='';
	for (z=0; z != grw.length;z++)
	{
		if (!tablegrec[grw[z]])
			console.log('ERROR : '+grw[z])
		
		send+=tablegrec[grw[z]];
	}
	return send;
}





all		= require('fs');
file	= require('fs');
fs		= require('fs');

require('../database/lemme/lemme.js');
require('./biblehub.js');
require('./perseus.js');
require('./james.js');
require('./bailly.js');
require('../database/bible/grec/seb/sebastien_lemme.js')
require('../database/bible/francais/sebastien/sebastien_brut.js');
require('../database/bible/francais/dumont/dumont.js');
require('../database/bible/romain/jerome/jerome.js');


html_debut=`<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>LEMME</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<style>
html, body, td {
font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
font-size:15px;
}

a {
	color: #4774CE;
}

tr:hover{
	background-color:#e2e2e2;
}
</style>
<script>
function voir() {
       x = document.getElementById("bailly");
       if (x.style.display == "none")
       {
       x.style.display = "block";
       }
       else
       {
               x.style.display = "none";
       }
}
</script>
</head>
<body>`;

html_fin='</body></html>';

all.writeFileSync('lemmes.html', html_debut+'<table>', 'utf8');


concordance_morph	= {}
concordance_verset	= {}

for (livre = 1 ; livre != 28 ; livre++)
	{
		for (chapitre = 1 ; chapitre != sebastien_lemme[livre].length ; chapitre++)
		{
			
			for (verset = 1 ; verset != sebastien_lemme[livre][chapitre].length ; verset++)
			{
				
				if (sebastien_lemme[livre][chapitre][verset] && sebastien_lemme[livre][chapitre][verset] != "")
				{	
					

					
					seb		= sebastien_lemme[livre][chapitre][verset].match(/\S+/g);
					sebfr	= sebastien_brut[livre][chapitre][verset].split("#");
					
					for (s = 0 ; s != seb.length ; s++)
					{
					
							
							sebfr_c = [...sebfr];
							
							sebs0	= seb[s].split('=')[0].replace(/\·|\.|,|;|;/g,'').toLowerCase();
							sebs1	= seb[s].split('=')[1];
							sebs2	= seb[s].split('=')[2].replace(/,/g,', ');
							sebfrs	= sebfr[s].replace(/\·|\.|,|;|;/g,'').toLowerCase();

							
							sebfr_c[s] = '<span style="background:#ffee63">'+sebfr_c[s]+'</span>';

							
							if (concordance_verset[sebs1])
							concordance_verset[sebs1] +=
							'<br><br><span style="font-size:18px">'+
							'<a href="../bible-france-interligne/'+livre+'-'+chapitre+'.html#v'+verset+'">'+book[livre]+'</a> '+ 													
							'<a href="../bible-grec-interligne/'+livre+'-'+chapitre+'.html#v'+verset+'">'+chapitre+':'+verset+'</a></span> '+
							'<span style="font-size:14px">&ensp; '+sebs0+' ('+sebs2+')</span><br>'+sebfr_c.join(' ')+
							'<br><br>'+dumont[livre][chapitre][verset]+
							'<br><br>'+jerome[livre][chapitre][verset]+'<br>';
							
							else
							concordance_verset[sebs1] =
							'<br><br><span style="font-size:18px">'+
							'<a href="../bible-france-interligne/'+livre+'-'+chapitre+'.html#v'+verset+'">'+book[livre]+'</a> '+ 													
							'<a href="../bible-grec-interligne/'+livre+'-'+chapitre+'.html#v'+verset+'">'+chapitre+':'+verset+'</a></span> '+
							'<span style="font-size:14px">&ensp; '+sebs0+' ('+sebs2+')</span><br>'+sebfr_c.join(' ')+
							'<br><br>'+dumont[livre][chapitre][verset]+
							'<br><br>'+jerome[livre][chapitre][verset]+'<br>';
						
						
						
						
							if (concordance_morph[sebs1])
							{
								
								
								sebx2 = sebfrs.replace(/\?/g,'\\?');
								regexvar = 
								'<tr><td>'+sebs0+'</td><td>&ensp;</td>'+'<td>'+sebs2+'</td><td>&ensp;</td><td>'+sebx2+'</td><td>&ensp;</td><td>(.*?)</td></tr>';

								regexpress = new RegExp(regexvar, "")

								if 	(resultregex=concordance_morph[sebs1].match(regexpress))
								{
									
									
									
									newnumber = parseInt(resultregex[1])+1 
									regexvar=regexvar.replace('(.*?)',newnumber);
									regexvar=regexvar.replace(/\\\?/g,'?');
									
									
									concordance_morph[sebs1] = concordance_morph[sebs1].replace(resultregex[0], regexvar);
										
								}
								
								
								else
								{

								concordance_morph[sebs1] += 
								'<tr><td>'+sebs0+'</td><td>&ensp;</td>'+'<td>'+sebs2+'</td><td>&ensp;</td><td>'+sebfrs+'</td><td>&ensp;</td><td>1</td></tr>';
								
								}
								
								
								
							}
													
							else
							{
							
								concordance_morph[sebs1] = 
								'<tr><td>'+sebs0+'</td><td>&ensp;</td>'+'<td>'+sebs2+'</td><td>&ensp;</td><td>'+sebfrs+'</td><td>&ensp;</td><td>1</td></tr>';
							}
						
						
						
					}
					
					
				
				}
				
			}
			
		}
		
	}




l=0;
array = [];
zero = {}

for (let [lem, info] of Object.entries(lemme)) 
{array.push(lem)}

tlength = array.length;

for (let [lem, info] of Object.entries(lemme)) 
{
	fichier = '';

	
	//fleche
	bef= array[l-1];
	aft= array[l+1];
	
	
	if (!bef || bef == undefined)
	fichier = '<h2>'+
	'---->&ensp;'+
	'<a href="'+aft+'.html">'+aft+'</a></h2><br>';
	
	else if (!aft || aft == undefined)
	fichier = '<h2>'+
	'<a href="'+bef+'.html">'+bef+'</a>&ensp;'+
	'<----&ensp;</h2><br>';
	
	else
	fichier = '<h2>'+
	'<a href="'+bef+'.html">'+bef+'</a>&ensp;'+
	'<--<a href="lemmes.html">TOUS</a>-->&ensp;'+
	'<a href="'+aft+'.html">'+aft+'</a></h2><br>';
	
	
	
	//lem + d
	fichier += '<h2>'+lem+' = '+info[0]+'</h2>';
	
	fichier += '<table>'
	
	//type
	fichier	+= '<tr><td>Type&ensp;</td><td><font color="red">'+info[2]+'</font></td></tr>';
	
	
	//PHONETIQUE
	lem_norm=lem.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	phone=grectofrench(lem_norm);
	fichier += '<tr><td>Phonétique&ensp;</td><td>'+phone+'</td></tr>';
	
	
	//origine
	fichier += '<tr><td>Origine&ensp;</td><td>'+info[3]+'</td></tr>';
	
	//origine detail
	origine_detail = info[3].match(/\S+/g);
	for (x=0 ; x!=origine_detail.length ; x++)
	{
		if (lemme[origine_detail[x]])
		{
			fichier += '<tr><td><a href="'+origine_detail[x]+'.html">'+origine_detail[x]+'</a>&ensp;</td><td>'+lemme[origine_detail[x]][0]+'</td></tr>';
		}
			//console.log(origine_detail+' '+origine_detail[x])
		
	}
	
	//DEFINITION +
	fichier += '<tr><td>Définitions&ensp;</td><td>'+info[1]+'</td></tr>';
	
	fichier += '</table>'
	
	
	//DEF bible hub
	if (biblehub[lem])
		fichier += '<br>'+biblehub[lem];
	
	//DEF perseus
	if (perseus[lem])
		fichier += '<br><br>'+perseus[lem];
	

	//DEF james strong
	
	if (james[lem])
	{
		
		
		fichier += '<br><br>'+james[lem];
	}
	
	
	//wiki
	fichier += '<br><br>Wiktionary : <a href="https://fr.wiktionary.org/w/index.php?&search='+lem+'">WIKT. FR</a>&ensp;<a href="https://en.wiktionary.org/w/index.php?&search='+lem+'">WIKT. EN</a>'
	

	
	//bailly
	if (bailly[lem])
	{
		fichier += '<br><br><button onclick="voir()">Bailly 1935</button><div style="display:none" id="bailly">'+bailly[lem]+'</div>';
	
	}
	
	
	//SUPER CONCORDANCE

	concordance_lem		= '';
	concordance_jlem	= {};
	

	
	if (concordance_morph[lem])
		fichier +=	'<br><br><table><tr>'+
					'<th style="text-align:left">Grec</th><th>&ensp;</th>'+
					'<th style="text-align:left">Morphologie</th><th>&ensp;</th>'+
					'<th style="text-align:left">Traduction</th><th>&ensp;</th>'+
					'<th style="text-align:left">Répétition</th></tr>'+concordance_morph[lem]+'</table>';
	
	
	if (concordance_verset[lem])
		fichier += '<br>'+concordance_verset[lem];
	
	
	//if 	(concordance_verset == "" && concordance_lem != "" || concordance_verset != "" && concordance_lem == "") console.log('Erreur : '+lem)
		
	
	if (!concordance_verset[lem] && concordance_lem == "") {
		fichier += '<br><br><b>0 Occurrence</b><br>Ce mot Grec n\'existe pas dans le texte tout entier.';
		zero[lem] = ' ';
	}
		
	
	fichier += '<br><br><br><br>';
	
	html_debut_l = html_debut.replace('<title>LEMME</title>','<title>'+lem+'</title>');
	
	file.writeFileSync(lem+'.html', html_debut_l + fichier + html_fin, 'utf8');
	
	num=l+1;
	
	all.appendFileSync('lemmes.html','\n<tr><td>'+num+']</td><td><a href="'+lem+'.html">'+lem+'</a></td><td>'+info[0]+'</td></tr>', 'utf8');


	l++;
}


all.appendFileSync('lemmes.html', '\n</table>'+html_fin, 'utf8');

fs.writeFileSync('zero.js', 'zero='+JSON.stringify(zero, null, 1), 'utf8');






//check erreur double

intro_book=`<?xml version='1.0' encoding='utf-8'?><html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>BIBLE</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
</head><body><table>`;


grammaire = {};

d=0;
body='';

ok ={
/*
'ἁγιότης':' ',
'ἁγιωσύνη':' ',
'ἁμαρτία':' ',
'ἁμάρτημα':' ',
'ἄνθρωπος':' ',
'ἀνθρώπινος':' ',
'ἀνταπόδοσις':' ',
'ἀνταπόδομα':' ',
'ἀφελότης':' ',
'ἁπλότης':' ',
*/
}
// '':' ',


for (let [i, value1] of Object.entries(lemme)) 
{

	if (zero[i])
		{}
	
	else
	{
	value1[0] = value1[0].split('|')[0];
	value1[0] = value1[0].split(',')[0];
	
	if (grammaire[value1[0]])
	{
		d++;
		
		body += 
		'\n<tr>'+
		'<td>['+d+']</td><td>'+value1[0]+'</td>'+
		'<td><a target="_blank" href="'+i+'.html">'+i+'</a></td>'+
		'<td><a target="_blank" href="'+grammaire[value1[0]]+'.html">'+grammaire[value1[0]]+'</a></td>'+
		'</tr>';
	
		//console.log('['+d+'] '+value1[0]+' = '+i+' -> '+grammaire[value1[0]]);
	
	}
	
	if(!ok[i])
		grammaire[value1[0]] = i
	
	}

}

fs.writeFileSync('incoherences.html',intro_book+body+'</table></body></html>', 'utf8');

