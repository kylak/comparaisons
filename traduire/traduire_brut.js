/*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

		FOR CHRIST and ALL
		------------------

/// \\\ /// \\\ /// \\\ /// \\\*/



//ETAPE 1
/*

ICI LA TRADUCTION DU GREC AU FRANCAIS

3 FICHIERS :
*/

require('../database/bible/grec/seb/sebastien_lemme.js');
require('../database/lemme/lemme.js');
require('../database/verbes/verbes.js');


//var fichier
fs		= require('fs');
ffr		= require('fs');


//var array
livre_fr	=[];
chapitre_fr	=[];
verset_fr	=[];

//other var
mot_fr			= '';
nb_no_found		=  1;
vgrec_avant		= '';
vlem_avant		= '';
vmorph_avant	= '';


//index : ex index_nb_name[1] --> MATTHIEU
index_nb_name = {
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
27:'APOCALYPSE' }






// BOUCLE DE TOUT LE ARRAY sebastien_lemme


//LIVRE
for (livre = 1 ; livre != sebastien_lemme.length ; livre++)
{


	chapitre_fr=[];


	//CHAPITRE
	for (chapitre = 1 ; chapitre != sebastien_lemme[livre].length ; chapitre++)
	{

		verset_fr=[];

		//VERSET
		for (verset = 1 ; verset != sebastien_lemme[livre][chapitre].length ; verset++)
		{

			mot_fr		= '';
			lcv 		= livre+' '+chapitre+' '+verset;

			//si verset existe
			if (sebastien_lemme[livre][chapitre][verset] && sebastien_lemme[livre][chapitre][verset] != "")
			{

			//division des mots
			mot_v = sebastien_lemme[livre][chapitre][verset].match(/\S+/g);

			//BOUCLE MOT
			for (nbm = 0 ; nbm != mot_v.length ; nbm++)
			{

				vgrec	= mot_v[nbm].split('=')[0];
				vlem	= mot_v[nbm].split('=')[1];
				vmorph	= mot_v[nbm].split('=')[2];



				MORPH_INFO	= vmorph.replace(/,/g,', ');
				fr			= '--';


				//CHECK LEMMA EXIST
				if (lemme[vlem])
				{

					fr = lemme[vlem][0];


		
		
		// --- MASCULIN FEMININ PLURIEL ---


		// -->  ,
		if (fr.includes(','))
		{


					fr = fr.split(',');



				// -----> ??????????????
				//lui-m??me, nous-m??mes, vous-m??mes, eux-m??mes, elle-m??me, nous-m??mes, vous-m??mes, elles-m??mes
				if ( vlem == '??????????????' )
				{


					if (MORPH_INFO.includes('1e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}


					else if (MORPH_INFO.includes('2e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[2].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('2e') && MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[2].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('2e') && MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[6].replace(/^ | $/,'');
					}


					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[4].replace(/^ | $/,'');
					}


					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[3].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[3].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[7].replace(/^ | $/,'');
					}

					else
							console.log('NO MORPH');


				}

				// -----> ???????
				else if ( vlem == '???????' )
				{

					if (MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}

					else if (MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}

					else
							console.log('NO MORPH');

				}

				// -----> ????
				else if ( vlem == '????' )
				{
					if (MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}

					else if (MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}

					else
							console.log('NO MORPH');

				}


				// -----> ???
				//le, la, les, ce, celui, celle, ces, ceux, celles
				else if ( vlem == '???' )
				{


					if (MORPH_INFO.includes('d??terminant'))
					{

						if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[2].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[2].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[1].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[2].replace(/^ | $/,'');
						}

						else
							console.log('NO MORPH');

					}


					else if (MORPH_INFO.includes('pronom'))
					{

						if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[6].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[4].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[7].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[5].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[8].replace(/^ | $/,'');
						}
						else
							console.log('NO MORPH');

					}

					else
							console.log('NO MORPH');

				}




				// -----> ???????????
				//m??me, lui-m??me, elle-m??me, m??mes, eux-m??mes, elles-m??mes, lui, eux, elle, elles, nous-m??mes, vous-m??mes
				else if ( vlem == '???????????' )
				{

					//m??me, m??mes
					if (MORPH_INFO.includes('d??terminant-d??monstratif'))
					{

						if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}

						else
							console.log('NO MORPH');

					}

					//m??me, lui-m??me, elle-m??me, m??mes, eux-m??mes, elles-m??mes, lui, eux, elle, elles, nous-m??mes, vous-m??mes
					else if (MORPH_INFO.includes('pronom-personnel, 3e'))
					{

						//lui eux, elle, elles

						if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[6].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[7].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[6].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[7].replace(/^ | $/,'');
						}


						else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[8].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[9].replace(/^ | $/,'');
						}

						else
							console.log('NO MORPH');

					}


					//	m??me,	lui-m??me,	elle-m??me,	m??mes,	eux-m??mes,	elles-m??mes,	lui,	eux,	elle,	elles,	moi-m??me,	toi-m??me,	nous-m??mes,	vous-m??mes
					//	0		1			2			3		4			5				6		7		8		9		10			11			12			13
					else if (MORPH_INFO.includes('pronom-r??fl??chi'))
					{

						//neutre singulier : lui-m??me m??me
						if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[1].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}

						//neutre pluriel : eux-m??mes
						else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[4].replace(/^ | $/,'');
						}

						//masculin singulier : moi-m??me toi-m??me lui-m??me lui-m??me
						else if (MORPH_INFO.includes('1e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[10].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('2e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[11].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[1].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[1].replace(/^ | $/,'');
						}

						//masculin pluriel : nous-m??mes vous-m??mes eux-m??mes
						else if (MORPH_INFO.includes('1e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[12].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('2e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[13].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[4].replace(/^ | $/,'');
						}

						//f??minin singulier : elle-m??me elles-m??mes
						else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[2].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('3e') && MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[5].replace(/^ | $/,'');
						}

						else
							console.log('NO MORPH');

					}


					else if (MORPH_INFO.includes('pronom-d??monstratif'))
					{
						//m??me m??mes
						if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}

						//m??me m??mes
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}

						//m??me m??mes
						else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('singulier'))
						{
							fr = fr[0].replace(/^ | $/,'');
						}
						else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
						{
							fr = fr[3].replace(/^ | $/,'');
						}

					}


				}
				
				
				
				else if ( vlem == '??????')
				{
					if (MORPH_INFO.includes('g??nitif'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('accusatif'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}
					else
						console.log('NO MORPH');
				}

				
				//de haut en bas, contre, selon
				else if ( vlem == '????????')
				{
					
					if (MORPH_INFO.includes('accusatif'))
					{
						fr = fr[2].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('g??nitif'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('pr??position'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else
						console.log('NO MORPH');
				}
				
				
				else if ( vlem == '??????')
				{
					if (MORPH_INFO == 'conjonction-de-coordination')
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO == 'adverbe')
					{
						fr = fr[1].replace(/^ | $/,'');
					}
					else
						console.log('NO MORPH');
				}
				
			
				//voir, voici
				else if ( vlem == '?????????')
				{
					if (MORPH_INFO.includes('interjection'))
					{
						fr = fr[1].replace(/^ | $/,'');
						MORPH_INFO="INDECLINABLE";
					}
					else if (MORPH_INFO.includes('verbe'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else
						console.log('NO MORPH');
				}
				
				


				else if (!MORPH_INFO.includes('verbe'))
				{
					if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}


					else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}


					else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[2].replace(/^ | $/,'');
					}
					else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[3].replace(/^ | $/,'');
					}


					else
					{
						console.log('FR virgule, ne trouve pas la MORPH -> '+fr+' '+MORPH_INFO+' '+vgrec+' '+vlem+' '+lcv);
					}

				}


				else if (MORPH_INFO.includes('verbe'))
				{
					
					if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('singulier'))
					{
						fr = fr[2].replace(/^ | $/,'');
					}
					
					else if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
					{
						fr = fr[3].replace(/^ | $/,'');
					}
					
					else if (MORPH_INFO.includes('singulier'))
					{
						fr = fr[0].replace(/^ | $/,'');
					}

					else if (MORPH_INFO.includes('pluriel'))
					{
						fr = fr[1].replace(/^ | $/,'');
					}

					else
					{
						fr = fr[0].replace(/^ | $/,'');
					}	
				}
				
				
				
				
		}



				}
				//CHECK ERROR
				else
				{
					console.log('Ne Trouve pas la LEMM : '+vlem+' '+nb_no_found+' '+lcv+':'+fr+' '+vgrec);
					nb_no_found++;
				}





// -- VERBE --
if (MORPH_INFO.split(',')[0] == 'verbe' || MORPH_INFO.includes('interjection, imp??ratif'))
{


	//INIT
	conjugaison	= '--';
	frconj=fr.split(' ')[0];
	
	//console.log(MORPH_INFO+' : '+vlem+' '+index_nb_name[livre]+' '+chapitre+' '+verset+' : '+fr+' '+vgrec+' '+conjugaison);
	


		// ------------- //


		//INFINITIF PRESENT
		if (MORPH_INFO.includes('infinitif, pr??sent, actif'))
		{
			conjugaison=verbes[frconj]['infinitif']['pr??sent'][0];
		}

		else if (MORPH_INFO.includes('infinitif, pr??sent, moyen'))
		{
			conjugaison=verbes[frconj]['infinitif']['pr??sent'][0];
		}

		else if (MORPH_INFO.includes('infinitif, pr??sent, passif'))
		{
			conjugaison=verbes['??tre']['infinitif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];
		}




		// ------------- //




		//INFINITIF PARFAIT
		else if (MORPH_INFO.includes('infinitif, parfait, actif'))
		{
			conjugaison='avoir '+verbes[frconj]['infinitif']['pass??'][0];
		}

		else if (MORPH_INFO.includes('infinitif, parfait, moyen'))
		{
			conjugaison='avoir '+verbes[frconj]['infinitif']['pass??'][0];
		}

		else if (MORPH_INFO.includes('infinitif, parfait, passif'))
		{
			conjugaison='avoir ??t?? '+verbes[frconj]['participe']['pass??'][1];
		}





		// ------------- //







		//INFINITIF AORISTE
		else if (MORPH_INFO.includes('infinitif, aoriste, actif'))
		{

					conjugaison=verbes[frconj]['infinitif']['pr??sent'][0];

		}

		else if (MORPH_INFO.includes('infinitif, aoriste, moyen'))
		{

					conjugaison=verbes[frconj]['infinitif']['pr??sent'][0];


		}

		else if (MORPH_INFO.includes('infinitif, aoriste, passif'))
		{
			conjugaison=verbes['??tre']['infinitif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];
		}




		// ------------- //






		//INFINITIF FUTUR
		else if (MORPH_INFO.includes('infinitif, futur, actif'))
		{
			conjugaison=verbes[frconj]['infinitif']['pr??sent'][0];
		}

		else if (MORPH_INFO.includes('infinitif, futur, moyen'))
		{
			conjugaison=verbes[frconj]['infinitif']['pr??sent'][0];
		}





		// ------------- //





		//PARTICIPE PRESENT
		else if (MORPH_INFO.includes('participe, pr??sent, actif'))
		{

					conjugaison=verbes[frconj]['participe']['pr??sent'][0];

					if (MORPH_INFO.includes('f??minin'))
					conjugaison = conjugaison + 'e';

					if (MORPH_INFO.includes('pluriel'))
					conjugaison = conjugaison + 's';


		}

		else if (MORPH_INFO.includes('participe, pr??sent, moyen'))
		{

					conjugaison=verbes[frconj]['participe']['pr??sent'][0];

					if (MORPH_INFO.includes('f??minin'))
					conjugaison = conjugaison + 'e';

					if (MORPH_INFO.includes('pluriel'))
					conjugaison = conjugaison + 's';


		}

		else if (MORPH_INFO.includes('participe, pr??sent, passif'))
		{


					v1 = verbes['??tre']['participe']['pr??sent'][0];
					v2 = verbes[frconj]['participe']['pass??'][1];

					if (MORPH_INFO.includes('f??minin'))
					{
					v1 = v1 + 'e';
					v2 = v2 + 'e';
					}

					if (MORPH_INFO.includes('pluriel'))
					{
					v1 = v1 + 's';
					v2 = v2 + 's';
					}

					conjugaison = v1 + ' ' + v2;

		}








		// ------------- //








		//PARTICIPE PARFAIT
		else if (MORPH_INFO.includes('participe, parfait, actif'))
		{
					
				if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayantes '+verbes[frconj]['participe']['pass??'][0]+ 's';
					
				else if (MORPH_INFO.includes('f??minin'))
					conjugaison='ayante '+verbes[frconj]['participe']['pass??'][0];

				else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants '+verbes[frconj]['participe']['pass??'][1]+ 's';
					
				else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants '+verbes[frconj]['participe']['pass??'][1]+ 's';

				else
					conjugaison='ayant '+verbes[frconj]['participe']['pass??'][1];

					
		}

		else if (MORPH_INFO.includes('participe, parfait, moyen'))
		{

				if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayantes '+verbes[frconj]['participe']['pass??'][0]+ 's';
					
				else if (MORPH_INFO.includes('f??minin'))
					conjugaison='ayante '+verbes[frconj]['participe']['pass??'][0];

				else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants '+verbes[frconj]['participe']['pass??'][1]+ 's';
					
				else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants '+verbes[frconj]['participe']['pass??'][1]+ 's';

				else
					conjugaison='ayant '+verbes[frconj]['participe']['pass??'][1];


		}

		else if (MORPH_INFO.includes('participe, parfait, passif'))
		{
				if (MORPH_INFO.includes('f??minin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayantes ??t??es '+verbes[frconj]['participe']['pass??'][0]+ 's';
					
				else if (MORPH_INFO.includes('f??minin'))
					conjugaison='ayante ??t??e '+verbes[frconj]['participe']['pass??'][0];

				else if (MORPH_INFO.includes('masculin') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants ??t??s '+verbes[frconj]['participe']['pass??'][1]+ 's';
					
				else if (MORPH_INFO.includes('neutre') && MORPH_INFO.includes('pluriel'))
					conjugaison='ayants ??t??s '+verbes[frconj]['participe']['pass??'][1]+ 's';

				else
					conjugaison='ayant ??t?? '+verbes[frconj]['participe']['pass??'][1];
		}




		// ------------- //





		//PARTICIPE FUTUR
		else if (MORPH_INFO.includes('participe, futur, actif'))
		{

					conjugaison=verbes[frconj]['participe']['pr??sent'][0];

					if (MORPH_INFO.includes('f??minin'))
					conjugaison = conjugaison + 'e';

					if (MORPH_INFO.includes('pluriel'))
					conjugaison = conjugaison + 's';

		}

		else if (MORPH_INFO.includes('participe, futur, moyen'))
		{

					conjugaison=verbes[frconj]['participe']['pr??sent'][0];

					if (MORPH_INFO.includes('f??minin'))
					conjugaison = conjugaison + 'e';

					if (MORPH_INFO.includes('pluriel'))
					conjugaison = conjugaison + 's';

		}

		else if (MORPH_INFO.includes('participe, futur, passif'))
		{

					v1 = verbes['??tre']['participe']['pr??sent'][0];
					v2 = verbes[frconj]['participe']['pass??'][1];

					if (MORPH_INFO.includes('f??minin'))
					{
					v1 = v1 + 'e';
					v2 = v2 + 'e';
					}

					if (MORPH_INFO.includes('pluriel'))
					{
					v1 = v1 + 's';
					v2 = v2 + 's';
					}

					conjugaison = v1 + ' ' + v2;

		}



		// ------------- //





		//PARTICIPE aoriste FEMININ passif && actif
		else if (MORPH_INFO.includes('participe, aoriste, actif'))
		{

					v1 = verbes['avoir']['participe']['pr??sent'][0];
					v2 = verbes[frconj]['participe']['pass??'][1];

					if (MORPH_INFO.includes('f??minin'))
					{
					v1 = v1 + 'e';
					v2 = v2 + 'e';
					}

					if (MORPH_INFO.includes('pluriel'))
					{
					v1 = v1 + 's';
					v2 = v2 + 's';
					}

					conjugaison = v1 + ' ' + v2;

		}

		else if (MORPH_INFO.includes('participe, aoriste, moyen'))
		{

					v1 = verbes['avoir']['participe']['pr??sent'][0];
					v2 = verbes[frconj]['participe']['pass??'][1];

					if (MORPH_INFO.includes('f??minin'))
					{
					v1 = v1 + 'e';
					v2 = v2 + 'e';
					}

					if (MORPH_INFO.includes('pluriel'))
					{
					v1 = v1 + 's';
					v2 = v2 + 's';
					}

					conjugaison = v1 + ' ' + v2;

		}

		else if (MORPH_INFO.includes('participe, aoriste, passif'))
		{


					v1 = verbes['avoir']['participe']['pr??sent'][0];
					v2 = verbes['??tre']['participe']['pass??'][1];
					v3 = verbes[frconj]['participe']['pass??'][1];

					if (MORPH_INFO.includes('f??minin'))
					{
					v1 = v1 + 'e';
					v2 = v2 + 'e';
					v3 = v3 + 'e';
					}

					if (MORPH_INFO.includes('pluriel'))
					{
					v1 = v1 + 's';
					v2 = v2 + 's';
					v3 = v3 + 's';
					}

					conjugaison = v1 + ' ' + v2 + ' ' + v3;

		}




		// ------------- //






		//INDICATIF PRESENT
		else if (MORPH_INFO.includes('indicatif, pr??sent, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison=verbes[frconj]['indicatif']['pr??sent'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}
					}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+verbes[frconj]['indicatif']['pr??sent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=verbes[frconj]['indicatif']['pr??sent'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+verbes[frconj]['indicatif']['pr??sent'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+verbes[frconj]['indicatif']['pr??sent'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=verbes[frconj]['indicatif']['pr??sent'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, pr??sent, moyen'))
		{


					if		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison=verbes[frconj]['indicatif']['pr??sent'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}
					}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+verbes[frconj]['indicatif']['pr??sent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=verbes[frconj]['indicatif']['pr??sent'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+verbes[frconj]['indicatif']['pr??sent'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+verbes[frconj]['indicatif']['pr??sent'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=verbes[frconj]['indicatif']['pr??sent'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, pr??sent, passif'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison=verbes['??tre']['indicatif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}


					}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes['??tre']['indicatif']['pr??sent'][1]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes['??tre']['indicatif']['pr??sent'][2]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes['??tre']['indicatif']['pr??sent'][3]+' '+verbes[frconj]['participe']['pass??'][1]+'s';}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes['??tre']['indicatif']['pr??sent'][4]+' '+verbes[frconj]['participe']['pass??'][1]+'s';}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes['??tre']['indicatif']['pr??sent'][5]+' '+verbes[frconj]['participe']['pass??'][1]+'s';}

		}







		// ------------- //





		//INDICATIF PARFAIT
		else if (MORPH_INFO.includes('indicatif, parfait, actif'))
		{

					if (MORPH_INFO.includes('1e, singulier')) {
						conjugaison="j'ai "+verbes[frconj]['indicatif']['pass?? compos??'][0];
					}

					else if (MORPH_INFO.includes('2e, singulier')) {
						conjugaison='tu as '+verbes[frconj]['indicatif']['pass?? compos??'][1];
					}

					else if (MORPH_INFO.includes('3e, singulier')) {
						conjugaison='a '+verbes[frconj]['indicatif']['pass?? compos??'][2];
					}

					else if (MORPH_INFO.includes('1e, pluriel')) {
						conjugaison='nous avons '+verbes[frconj]['indicatif']['pass?? compos??'][3];
					}

					else if (MORPH_INFO.includes('2e, pluriel')) {
						conjugaison='vous avez '+verbes[frconj]['indicatif']['pass?? compos??'][4];
					}

					else if (MORPH_INFO.includes('3e, pluriel')) {
						conjugaison='ont '+verbes[frconj]['indicatif']['pass?? compos??'][5];
					}
					
					
					

		}
		
		

		else if (MORPH_INFO.includes('indicatif, parfait, moyen'))
		{

					if (MORPH_INFO.includes('1e, singulier')) {
						conjugaison="j'ai "+verbes[frconj]['indicatif']['pass?? compos??'][0];
					}

					else if (MORPH_INFO.includes('2e, singulier')) {
						conjugaison='tu as '+verbes[frconj]['indicatif']['pass?? compos??'][1];
					}

					else if (MORPH_INFO.includes('3e, singulier')) {
						conjugaison='a '+verbes[frconj]['indicatif']['pass?? compos??'][2];
					}

					else if (MORPH_INFO.includes('1e, pluriel')) {
						conjugaison='nous avons '+verbes[frconj]['indicatif']['pass?? compos??'][3];
					}

					else if (MORPH_INFO.includes('2e, pluriel')) {
						conjugaison='vous avez '+verbes[frconj]['indicatif']['pass?? compos??'][4];
					}

					else if (MORPH_INFO.includes('3e, pluriel')) {
						conjugaison='ont '+verbes[frconj]['indicatif']['pass?? compos??'][5];
					}

		}

		else if (MORPH_INFO.includes('indicatif, parfait, passif'))
		{



					if (MORPH_INFO.includes('1e, singulier')) {
						conjugaison="j'ai ??t?? "+verbes[frconj]['indicatif']['pass?? compos??'][0];
					}

					else if (MORPH_INFO.includes('2e, singulier')) {
						conjugaison='tu as ??t?? '+verbes[frconj]['indicatif']['pass?? compos??'][1];
					}

					else if (MORPH_INFO.includes('3e, singulier')) {
						conjugaison='a ??t?? '+verbes[frconj]['indicatif']['pass?? compos??'][2];
					}

					else if (MORPH_INFO.includes('1e, pluriel')) {
						conjugaison='nous avons ??t?? '+verbes[frconj]['indicatif']['pass?? compos??'][3]+'s';
					}

					else if (MORPH_INFO.includes('2e, pluriel')) {
						conjugaison='vous avez ??t?? '+verbes[frconj]['indicatif']['pass?? compos??'][4]+'s';
					}

					else if (MORPH_INFO.includes('3e, pluriel')) {
						conjugaison='ont ??t?? '+verbes[frconj]['indicatif']['pass?? compos??'][5]+'s';
					}
					
					
					
					

		}




		// ------------- //





		//INDICATIF IMPARFAIT
		else if (MORPH_INFO.includes('indicatif, imparfait, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison=verbes[frconj]['indicatif']['imparfait'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes[frconj]['indicatif']['imparfait'][1]; }

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes[frconj]['indicatif']['imparfait'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes[frconj]['indicatif']['imparfait'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes[frconj]['indicatif']['imparfait'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes[frconj]['indicatif']['imparfait'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, imparfait, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison=verbes[frconj]['indicatif']['imparfait'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes[frconj]['indicatif']['imparfait'][1]; }

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes[frconj]['indicatif']['imparfait'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes[frconj]['indicatif']['imparfait'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes[frconj]['indicatif']['imparfait'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes[frconj]['indicatif']['imparfait'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, imparfait, passif'))
		{

					if (MORPH_INFO.includes('1e, singulier')) {
					conjugaison=verbes['??tre']['indicatif']['imparfait'][0]+' '+verbes[frconj]['participe']['pass??'][1];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes['??tre']['indicatif']['imparfait'][1]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes['??tre']['indicatif']['imparfait'][2]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes['??tre']['indicatif']['imparfait'][3]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes['??tre']['indicatif']['imparfait'][4]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes['??tre']['indicatif']['imparfait'][5]+' '+verbes[frconj]['participe']['pass??'][1];}

		}





		// ------------- //





		//INDICATIF PLUS QUE PARFAIT
		else if (MORPH_INFO.includes('indicatif, plus-que-parfait, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison='j\''+
					verbes['avoir']['indicatif']['imparfait'][0]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][0]; }

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison='tu '+
					verbes['avoir']['indicatif']['imparfait'][1]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison=
					verbes['avoir']['indicatif']['imparfait'][2]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison='nous '+
					verbes['avoir']['indicatif']['imparfait'][3]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='vous '+
					verbes['avoir']['indicatif']['imparfait'][4]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison=
					verbes['avoir']['indicatif']['imparfait'][5]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, plus-que-parfait, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison='j\''+
					verbes['avoir']['indicatif']['imparfait'][0]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][0]; }

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison='tu '+
					verbes['avoir']['indicatif']['imparfait'][1]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison=
					verbes['avoir']['indicatif']['imparfait'][2]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison='nous '+
					verbes['avoir']['indicatif']['imparfait'][3]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='vous '+
					verbes['avoir']['indicatif']['imparfait'][4]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison=
					verbes['avoir']['indicatif']['imparfait'][5]+' '+
					verbes[frconj]['indicatif']['plus-que-parfait'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, plus-que-parfait, passif'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison='j\''+
					verbes['avoir']['indicatif']['imparfait'][0]+' '+
					verbes['??tre']['indicatif']['plus-que-parfait'][0]+' '+
					verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes['avoir']['indicatif']['imparfait'][1]+' '+
					verbes['??tre']['indicatif']['plus-que-parfait'][1]+' '+
					verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes['avoir']['indicatif']['imparfait'][2]+' '+
					verbes['??tre']['indicatif']['plus-que-parfait'][2]+' '+
					verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes['avoir']['indicatif']['imparfait'][3]+' '+
					verbes['??tre']['indicatif']['plus-que-parfait'][3]+' '+
					verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes['avoir']['indicatif']['imparfait'][4]+' '+
					verbes['??tre']['indicatif']['plus-que-parfait'][4]+' '+
					verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes['avoir']['indicatif']['imparfait'][5]+' '+
					verbes['??tre']['indicatif']['plus-que-parfait'][5]+' '+
					verbes[frconj]['participe']['pass??'][1];}


		}





		// ------------- //







		//INDICATIF FUTUR
		else if (MORPH_INFO.includes('indicatif, futur, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison=verbes[frconj]['indicatif']['futur simple'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison='tu '+
					verbes[frconj]['indicatif']['futur simple'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison=
					verbes[frconj]['indicatif']['futur simple'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) 	{
					conjugaison='nous '+
					verbes[frconj]['indicatif']['futur simple'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='vous '+
					verbes[frconj]['indicatif']['futur simple'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison=
					verbes[frconj]['indicatif']['futur simple'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, futur, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison=verbes[frconj]['indicatif']['futur simple'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison='tu '+
					verbes[frconj]['indicatif']['futur simple'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison=
					verbes[frconj]['indicatif']['futur simple'][2]; }

					else if (MORPH_INFO.includes('1e, pluriel')) 	{
					conjugaison='nous '+
					verbes[frconj]['indicatif']['futur simple'][3]; }

					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='vous '+
					verbes[frconj]['indicatif']['futur simple'][4]; }

					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison=
					verbes[frconj]['indicatif']['futur simple'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, futur, passif'))
		{

					if		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison=verbes['??tre']['indicatif']['futur simple'][0]+' '+verbes[frconj]['participe']['pass??'][1];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='tu '+
					verbes['??tre']['indicatif']['futur simple'][1]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=
					verbes['??tre']['indicatif']['futur simple'][2]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='nous '+
					verbes['??tre']['indicatif']['futur simple'][3]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='vous '+
					verbes['??tre']['indicatif']['futur simple'][4]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=
					verbes['??tre']['indicatif']['futur simple'][5]+' '+verbes[frconj]['participe']['pass??'][1];}

		}




		// ------------- //





		//INDICATIF aoriste : pass?? compos?? ou pass?? simple
		else if (MORPH_INFO.includes('indicatif, aoriste, actif'))
		{

					if (MORPH_INFO.includes('1') && MORPH_INFO.includes('singulier')) {
					conjugaison=verbes[frconj]['indicatif']['pass?? simple'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('singulier')) {
					conjugaison='tu '+
					verbes[frconj]['indicatif']['pass?? simple'][1]; }

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('singulier')) {
					conjugaison=
					verbes[frconj]['indicatif']['pass?? simple'][2]; }

					else if (MORPH_INFO.includes('1') && MORPH_INFO.includes('pluriel')) {
					conjugaison='nous '+
					verbes[frconj]['indicatif']['pass?? simple'][3]; }

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('pluriel')) {
					conjugaison='vous '+
					verbes[frconj]['indicatif']['pass?? simple'][4]; }

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('pluriel')) {
					conjugaison=
					verbes[frconj]['indicatif']['pass?? simple'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, aoriste, moyen'))
		{

					if (MORPH_INFO.includes('1') && MORPH_INFO.includes('singulier')) {
					conjugaison=verbes[frconj]['indicatif']['pass?? simple'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('singulier')) {
					conjugaison='tu '+
					verbes[frconj]['indicatif']['pass?? simple'][1]; }

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('singulier')) {
					conjugaison=
					verbes[frconj]['indicatif']['pass?? simple'][2]; }

					else if (MORPH_INFO.includes('1') && MORPH_INFO.includes('pluriel')) {
					conjugaison='nous '+
					verbes[frconj]['indicatif']['pass?? simple'][3]; }

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('pluriel')) {
					conjugaison='vous '+
					verbes[frconj]['indicatif']['pass?? simple'][4]; }

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('pluriel')) {
					conjugaison=
					verbes[frconj]['indicatif']['pass?? simple'][5]; }

		}

		else if (MORPH_INFO.includes('indicatif, aoriste, passif'))
		{

					if		(MORPH_INFO.includes('1') && MORPH_INFO.includes('singulier')) {
					conjugaison=verbes['??tre']['indicatif']['pass?? simple'][0]+' '+verbes[frconj]['participe']['pass??'][1];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="j'"+conjugaison;
					}
					else
					{
						conjugaison="je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('singulier')) {
					conjugaison='tu '+
					verbes['??tre']['indicatif']['pass?? simple'][1]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('singulier')) {
					conjugaison=
					verbes['??tre']['indicatif']['pass?? simple'][2]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1') && MORPH_INFO.includes('pluriel')) {
					conjugaison='nous '+
					verbes['??tre']['indicatif']['pass?? simple'][3]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('2') && MORPH_INFO.includes('pluriel')) {
					conjugaison='vous '+
					verbes['??tre']['indicatif']['pass?? simple'][4]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3') && MORPH_INFO.includes('pluriel')) {
					conjugaison=
					verbes['??tre']['indicatif']['pass?? simple'][5]+' '+verbes[frconj]['participe']['pass??'][1];}

		}




		// ------------- //




		//IMPERATIF PRESENT
		else if (MORPH_INFO.includes('imp??ratif, pr??sent, actif'))
		{

					//if 		(MORPH_INFO.includes('1e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0]; }
						 if (MORPH_INFO.includes('2e, singulier')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][0]; }
					else if (MORPH_INFO.includes('3e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][2]; }
					else if (MORPH_INFO.includes('1e, pluriel')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][1]; }
					else if (MORPH_INFO.includes('2e, pluriel')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][2]; }
					else if (MORPH_INFO.includes('3e, pluriel')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][5]; }





		}

		else if (MORPH_INFO.includes('imp??ratif, pr??sent, moyen'))
		{

					//if 		(MORPH_INFO.includes('1e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0]; }
						 if (MORPH_INFO.includes('2e, singulier')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][0]; }
					else if (MORPH_INFO.includes('3e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][2]; }
					else if (MORPH_INFO.includes('1e, pluriel')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][1]; }
					else if (MORPH_INFO.includes('2e, pluriel')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][2]; }
					else if (MORPH_INFO.includes('3e, pluriel')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][5]; }



		}

		else if (MORPH_INFO.includes('imp??ratif, pr??sent, passif'))
		{

					//if 		(MORPH_INFO.includes('1e, singulier')) {
					//conjugaison=verbes['??tre']['imp??ratif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];}

					if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison=verbes['??tre']['imp??ratif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=verbes['??tre']['subjonctif']['pr??sent'][2]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison=verbes['??tre']['imp??ratif']['pr??sent'][1]+' '+verbes[frconj]['participe']['pass??'][1]+'s';}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison=verbes['??tre']['imp??ratif']['pr??sent'][2]+' '+verbes[frconj]['participe']['pass??'][1]+'s';}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=verbes['??tre']['subjonctif']['pr??sent'][5]+' '+verbes[frconj]['participe']['pass??'][1]+'s';}




		}




		// ------------- //





		//IMPERATIF PARFAIT
		else if (MORPH_INFO.includes('imp??ratif, parfait, actif'))
		{

					//if 		(MORPH_INFO.includes('2e, singulier')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][0]; }
					//else if (MORPH_INFO.includes('2e, pluriel')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][2]; }
					
					
					if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison=verbes['avoir']['imp??ratif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison=verbes['avoir']['imp??ratif']['pr??sent'][2]+' '+verbes[frconj]['participe']['pass??'][1]+'s';}
					
					
					

		}

		else if (MORPH_INFO.includes('imp??ratif, parfait, passif'))
		{

					if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison=verbes['avoir']['imp??ratif']['pr??sent'][0]+' ??t?? '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison=verbes['avoir']['imp??ratif']['pr??sent'][2]+' ??t?? '+verbes[frconj]['participe']['pass??'][1]+'s';}

		}





	// ------------- //







		//IMPERATIF aoriste
		else if (MORPH_INFO.includes('imp??ratif, aoriste, actif'))
		{
					//if 		(MORPH_INFO.includes('1e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0]; }
						 if (MORPH_INFO.includes('2e, singulier')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][0]; }
					else if (MORPH_INFO.includes('3e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][2]; }
					else if (MORPH_INFO.includes('1e, pluriel')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][1]; }
					else if (MORPH_INFO.includes('2e, pluriel')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][2]; }
					else if (MORPH_INFO.includes('3e, pluriel')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][5]; }

		}

		else if (MORPH_INFO.includes('imp??ratif, aoriste, moyen'))
		{
					//if 		(MORPH_INFO.includes('1e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0]; }
						 if (MORPH_INFO.includes('2e, singulier')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][0]; }
					else if (MORPH_INFO.includes('3e, singulier')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][2]; }
					else if (MORPH_INFO.includes('1e, pluriel')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][1]; }
					else if (MORPH_INFO.includes('2e, pluriel')) { conjugaison=verbes[frconj]['imp??ratif']['pr??sent'][2]; }
					else if (MORPH_INFO.includes('3e, pluriel')) { conjugaison=verbes[frconj]['subjonctif']['pr??sent'][5]; }

		}

		else if (MORPH_INFO.includes('imp??ratif, aoriste, passif'))
		{


					//if 		(MORPH_INFO.includes('1e, singulier')) {
					//conjugaison=verbes['??tre']['imp??ratif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];}

					if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison=verbes['??tre']['imp??ratif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison=verbes['??tre']['subjonctif']['pr??sent'][2]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison=verbes['??tre']['imp??ratif']['pr??sent'][1]+' '+verbes[frconj]['participe']['pass??'][1]+'s';}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison=verbes['??tre']['imp??ratif']['pr??sent'][2]+' '+verbes[frconj]['participe']['pass??'][1]+'s';}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison=verbes['??tre']['subjonctif']['pr??sent'][5]+' '+verbes[frconj]['participe']['pass??'][1]+'s';}



		}





		// ------------- //






		//SUBJONCTIF PRESENT
		else if (MORPH_INFO.includes('subjonctif, pr??sent, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['pr??sent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['pr??sent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['pr??sent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['pr??sent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['pr??sent'][5]; }


		}

		else if (MORPH_INFO.includes('subjonctif, pr??sent, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}


					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['pr??sent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['pr??sent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['pr??sent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['pr??sent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['pr??sent'][5]; }

		}

		else if (MORPH_INFO.includes('subjonctif, pr??sent, passif'))
		{


					if 		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison=verbes['??tre']['subjonctif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='que tu '+
					verbes['??tre']['subjonctif']['pr??sent'][1]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison='que '+
					verbes['??tre']['subjonctif']['pr??sent'][2]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='que nous '+
					verbes['??tre']['subjonctif']['pr??sent'][3]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='que vous '+
					verbes['??tre']['subjonctif']['pr??sent'][4]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison='que '+
					verbes['??tre']['subjonctif']['pr??sent'][5]+' '+verbes[frconj]['participe']['pass??'][1];}

		}





		// ------------- //





		//SUBJONCTIF PARFAIT
		else if (MORPH_INFO.includes('subjonctif, parfait, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison="que j'ai "+verbes[frconj]['participe']['pass??'][1];}


					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu aies '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous ayons '+verbes[frconj]['participe']['pass??'][1];}


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous ayez '+verbes[frconj]['participe']['pass??'][1];}



		}





		// ------------- //





		//SUBJONCTIF AORISTE
		else if (MORPH_INFO.includes('subjonctif, aoriste, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['pr??sent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['pr??sent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['pr??sent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['pr??sent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['pr??sent'][5]; }

		}

		else if (MORPH_INFO.includes('subjonctif, aoriste, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['pr??sent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['pr??sent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['pr??sent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['pr??sent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['pr??sent'][5]; }


		}

		else if (MORPH_INFO.includes('subjonctif, aoriste, passif'))
		{

					if 		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison=verbes['??tre']['subjonctif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='que tu '+
					verbes['??tre']['subjonctif']['pr??sent'][1]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison='que '+
					verbes['??tre']['subjonctif']['pr??sent'][2]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='que nous '+
					verbes['??tre']['subjonctif']['pr??sent'][3]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='que vous '+
					verbes['??tre']['subjonctif']['pr??sent'][4]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison='que '+
					verbes['??tre']['subjonctif']['pr??sent'][5]+' '+verbes[frconj]['participe']['pass??'][1];}

		}







		// ------------- //





		//OPTATIF PRESENT
		else if (MORPH_INFO.includes('optatif, pr??sent, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['pr??sent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['pr??sent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['pr??sent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['pr??sent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['pr??sent'][5]; }

		}

		else if (MORPH_INFO.includes('optatif, pr??sent, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['pr??sent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['pr??sent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['pr??sent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['pr??sent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['pr??sent'][5]; }


		}





		// ------------- //





		//OPTATIF AORISTE
		else if (MORPH_INFO.includes('optatif, aoriste, actif'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['pr??sent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['pr??sent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['pr??sent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['pr??sent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['pr??sent'][5]; }


		}

		else if (MORPH_INFO.includes('optatif, aoriste, moyen'))
		{

					if		(MORPH_INFO.includes('1e, singulier'))	{
					conjugaison=verbes[frconj]['subjonctif']['pr??sent'][0];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier'))	{
					conjugaison = 'que tu '+
					verbes[frconj]['subjonctif']['pr??sent'][1]; }

					else if (MORPH_INFO.includes('3e, singulier'))	{
					conjugaison = 'que '+
					verbes[frconj]['subjonctif']['pr??sent'][2]; }


					else if (MORPH_INFO.includes('1e, pluriel'))	{
					conjugaison = 'que nous '+
					verbes[frconj]['subjonctif']['pr??sent'][3]; }


					else if (MORPH_INFO.includes('2e, pluriel'))	{
					conjugaison='que vous '+
					verbes[frconj]['subjonctif']['pr??sent'][4]; }


					else if (MORPH_INFO.includes('3e, pluriel'))	{
					conjugaison='que '+
					verbes[frconj]['subjonctif']['pr??sent'][5]; }

		}

		else if (MORPH_INFO.includes('optatif, aoriste, passif'))
		{


					if 		(MORPH_INFO.includes('1e, singulier')) {
					conjugaison=verbes['??tre']['subjonctif']['pr??sent'][0]+' '+verbes[frconj]['participe']['pass??'][1];

					if (conjugaison.match(/^[ae????i??o??uy]/i))
					{
						conjugaison="que j'"+conjugaison;
					}
					else
					{
						conjugaison="que je "+conjugaison;
					}

					}

					else if (MORPH_INFO.includes('2e, singulier')) {
					conjugaison='que tu '+
					verbes['??tre']['subjonctif']['pr??sent'][1]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, singulier')) {
					conjugaison='que '+
					verbes['??tre']['subjonctif']['pr??sent'][2]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('1e, pluriel')) {
					conjugaison='que nous '+
					verbes['??tre']['subjonctif']['pr??sent'][3]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('2e, pluriel')) {
					conjugaison='que vous '+
					verbes['??tre']['subjonctif']['pr??sent'][4]+' '+verbes[frconj]['participe']['pass??'][1];}

					else if (MORPH_INFO.includes('3e, pluriel')) {
					conjugaison='que '+
					verbes['??tre']['subjonctif']['pr??sent'][5]+' '+verbes[frconj]['participe']['pass??'][1];}

		}
		
		else
			console.log('! PAS DE CONJUGAISON !');







//adaptation fr --->>> CONJUGAISON
if (conjugaison != '--')
{
if (fr.split(' ').length == 1)
	{
		fr=conjugaison;
	}
else
	{
		//delete first word
		fr=fr.split(' ').slice(1).join(' ');
		//add new word
		fr=conjugaison+' '+fr;
	}
}

//CHECK CONJUGAISON
else if (conjugaison == '--')
	console.log('ERREUR Conjugaison :'+MORPH_INFO+' '+livre+':'+chapitre+':'+verset+':'+fr+' '+vgrec+' '+vlem);

}



		//CHECK FR
		if (fr.includes('undefined'))	{console.log('E1] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}
		if (fr == '')					{console.log('E2] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}
		if (fr == '--')					{console.log('E3] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}
		if (!fr)						{console.log('E4] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}
		if (fr.includes(','))			{console.log('E5] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}
		if (fr.includes('|'))			{console.log('E6] '+lcv+' '+fr+' '+vgrec+' '+vlem+' '+MORPH_INFO)}


//MAJ

point_avant = 0;
if (vgrec_avant.includes('??') || vgrec_avant.includes('.'))
{

	if (MORPH_INFO.includes('datif') && !MORPH_INFO.includes('pr??position'))
	{
		//if (vgrec[0] == vgrec[0].toUpperCase()) console.log(vgrec_avant+' '+vgrec)
	}

}


maj = 0;
if (vgrec[0] == vgrec[0].toUpperCase())
{
	firstmaj	= fr[0].toUpperCase();
	fr		= fr.substr(1);
	fr		= firstmaj+fr;
	maj		= 1;
}




//PONC
if (vgrec.match(/\??$/)) fr = fr+'??';
if (vgrec.match(/\.$/)) fr = fr+'.';
if (vgrec.match(/,$/)) fr = fr+',';
if (vgrec.match(/;$/)) fr = fr+';';
if (vgrec.match(/??$/)) fr = fr+'??';

//add genitif
if (MORPH_INFO.includes('g??nitif') && !MORPH_INFO.includes('pr??position'))
{
	if (vlem != "?????" || vlem != "????????")
	{
		//if (maj==1) fr = 'De '+fr;
		//else
		fr = 'de '+fr;
	}

}


//add datif
else if (MORPH_INFO.includes('datif') && !MORPH_INFO.includes('pr??position'))
{

	//if (maj==1) fr = '?? '+fr;

	//else
	fr = '?? '+fr;
}




mot_fr += fr+'#';



vgrec_avant = vgrec;
vlem_avant = vlem;
vmorph_avant = vmorph;


			} // for mot
			} //si verset existe


			mot_fr = mot_fr.replace(/#+$/,'');
			verset_fr[verset] = mot_fr;
			verset_fr[0] = livre+':'+chapitre+':'+verset;

		} //for verset


		chapitre_fr[chapitre] = verset_fr;

	} //for chapitre




	//livre fr
	livre_fr[livre] = chapitre_fr;
	nbchapfr = livre_fr[livre].length-1;
	livre_fr[livre][0] = livre+'-'+index_nb_name[livre]+' - '+nbchapfr+' chapitres';


} //for livre

//livre fr
nblivrefr = livre_fr.length-1;
livre_fr[0] = 'BIBLE SEBASTIEN BRUT - '+nblivrefr+' livres';
fs.writeFileSync('../database/bible/francais/sebastien/sebastien_brut.js','sebastien_brut='+JSON.stringify(livre_fr, null, 1), 'utf8');
