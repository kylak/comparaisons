/*
   IESOUS CHRIST
   ------------

*/


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
require('../database/bible/grec/seb/sebastien_lemme.js');

//var
point		= 1;
nb_no_found	= 1;
strong_spec	= 0;
add			= 0;


//var array
livre_fr	=[];
chapitre_fr	=[];
verset_fr	=[];


file.writeFileSync('nt-auto-seb-net.txt', '', 'utf8');
file.writeFileSync('nt-auto-seb-brut.txt', '', 'utf8');

total = 0;
tnb = 0;
//LIVRE
for (livre = 1 ; livre != 28 ; livre++)
{

	chapitre_fr=[];
	
	
	//CHAPITRE
	for (chapitre = 1 ; chapitre != sebastien_brut[livre].length ; chapitre++)
	{

		verset_fr=[];
		tnb++;
		total = (sebastien_brut[livre][chapitre].length-1)+total;

		//console.log(tnb+' : '+(sebastien_brut[livre][chapitre].length-1)+' : '+ total+' M '+total/tnb);

		//VERSET
		for (verset = 1 ; verset != sebastien_brut[livre][chapitre].length ; verset++)
		{

			phrase			= [];
			phrase_morph	= [];

			verset_sebastien		= sebastien_brut[livre][chapitre][verset];
			verset_sebastien_lemme	= sebastien_lemme[livre][chapitre][verset];

			//get mot array
			if ( verset_sebastien != '')
			{

				phrase	= verset_sebastien.split('#');
				sebgrec	= verset_sebastien_lemme.split(' ');


				for (x = 0 ; x != sebgrec.length ; x++)
				{
					phrase_morph.push(sebgrec[x].split('=')[2])

				}


			}
			else
			{
				phrase			= []
				phrase_morph	= []

			}




			//MOT
			genitif	= 0;
			datif	= 0;





			if ( verset_sebastien != '')
			{


				//CONTRUCTOR PHRASIS
				for (i=0;i!=phrase.length;i++)
				{

					modif = 0;



if (phrase[i+1] && phrase[i+2])
{

//les ... de lui --> ses ...
if (
	phrase_morph[i].includes('d??terminant-article') && phrase[i] == 'les' &&
	phrase_morph[i+1].includes('nom,') && phrase_morph[i+1].includes('pluriel') &&
	(phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,masculin,singulier') ||
	 phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,neutre,singulier'))
	)
	{
		phrase[i]='ses';
		phrase[i+1]=phrase[i+1]+phrase[i+2].replace('de lui','')
		phrase[i+2]='';
	}

//de les ... de lui --> de ses ...
if (
	phrase_morph[i].includes('d??terminant-article') && phrase[i] == 'de les' &&
	phrase_morph[i+1].includes('nom,g??nitif') && phrase_morph[i+1].includes('pluriel') &&
	(phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,masculin,singulier') ||
	 phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,neutre,singulier'))
	)
	{
		phrase[i]='de ses';
		phrase[i+1]=phrase[i+1].replace(/^de /,' ')+phrase[i+2].replace('de lui','')
		phrase[i+2]='';
	}


//de la ... de lui --> sa ...
if (
	phrase_morph[i].includes('d??terminant-article,g??nitif,') && phrase[i] == 'de la' &&
	phrase_morph[i+1].includes('nom,g??nitif,f??minin,singulier') &&
	(phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,masculin,singulier') ||
	 phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,neutre,singulier'))
	)
	{
		phrase[i]='de sa';
		phrase[i+1]=phrase[i+1].replace(/^de /,'')+phrase[i+2].replace('de lui','');
		phrase[i+2]='';
	}


//la ... de toi --> ta ...
if (
	phrase_morph[i].includes('d??terminant-article,accusatif,f??minin,singulier') && phrase[i] == 'la' &&
	phrase_morph[i+1].includes('nom,accusatif,f??minin,singulier') &&
	phrase_morph[i+2].includes('pronom-personnel,2e,g??nitif,singulier'))
	{
		phrase[i]='ta';
		phrase[i+1]=phrase[i+1]+phrase[i+2].replace(/de toi|De toi\./,'');
		phrase[i+2]='';


	}

//le ... de lui --> son ...
if (
	(phrase_morph[i].includes('d??terminant-article,accusatif,neutre,singulier') ||
	phrase_morph[i].includes('d??terminant-article,accusatif,masculin,singulier')
	) && phrase[i] == 'le' &&
	(phrase_morph[i+1].includes('nom,accusatif,neutre,singulier') ||
	phrase_morph[i+1].includes('nom,accusatif,masculin,singulier')) &&
	phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,masculin,singulier'))
	{
		phrase[i]='son';
		phrase[i+1]=phrase[i+1]+phrase[i+2].replace('de lui','');
		phrase[i+2]='';
	}

// le ... de moi --> mon ...
if (
	(
	phrase_morph[i].includes('d??terminant-article,accusatif,neutre,singulier')   ||
	phrase_morph[i].includes('d??terminant-article,accusatif,masculin,singulier') ||
	phrase_morph[i].includes('d??terminant-article,nominatif,neutre,singulier')   ||
	phrase_morph[i].includes('d??terminant-article,nominatif,masculin,singulier')
	) && phrase[i] == 'le' &&
	(
	phrase_morph[i+1].includes('nom,accusatif,neutre,singulier') ||
	phrase_morph[i+1].includes('nom,accusatif,masculin,singulier') ||
	phrase_morph[i+1].includes('nom,nominatif,neutre,singulier') ||
	phrase_morph[i+1].includes('nom,nominatif,masculin,singulier')
	)
	&& phrase_morph[i+2].includes('pronom-personnel,1e,g??nitif,singulier'))
	{
		phrase[i]='mon';
		phrase[i+1]=phrase[i+1]+phrase[i+2].replace('de moi','');
		phrase[i+2]='';
	}







//la ... de lui --> sa ...
if (
	phrase_morph[i].includes('d??terminant-article,accusatif,f??minin,singulier')
	&& phrase[i] == 'la' &&
	phrase_morph[i+1].includes('nom,accusatif,f??minin,singulier') &&
	phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,masculin,singulier')
	)
	{
		phrase[i]='sa';
		phrase[i+1]=phrase[i+1]+phrase[i+2].replace('de lui','');
		phrase[i+2]='';
	}




//?? la + ?? ... de lui --> ?? sa ...
if (
	phrase_morph[i].includes('d??terminant-article,datif,f??minin,singulier')
	&& phrase[i] == '?? la' &&
	phrase_morph[i+1].includes('nom,datif,f??minin,singulier') &&
	phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,masculin,singulier')
	)
	{
		phrase[i]='?? sa';
		phrase[i+1]=phrase[i+1].replace(/^?? /,' ')+phrase[i+2].replace('de lui','');
		phrase[i+2]='';
	}




//de les + de ... + de eux --> de leurs ...
if (
	phrase_morph[i].includes('d??terminant-article,g??nitif,f??minin,pluriel') && phrase[i] == 'de les' &&
	phrase_morph[i+1].includes('nom,g??nitif,f??minin,pluriel') &&
	(phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,masculin,pluriel') ||
	 phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,neutre,pluriel'))
	)
	{
		phrase[i]='de leurs';
		phrase[i+1]=phrase[i+1].replace(/^de /,'')+phrase[i+2].replace('de eux','');
		phrase[i+2]='';
	}


//le ... de eux --> leur ...
if (
	phrase_morph[i].includes('d??terminant-article') && phrase[i] == 'le' &&
	phrase_morph[i+1].includes('nom,accusatif,masculin,singulier') &&
	(phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif, masculin,pluriel') ||
	 phrase_morph[i+2].includes('pronom-personnel,3e,g??nitif,neutre,pluriel'))
	)
	{
		phrase[i]='leur';
		phrase[i+2]='';
	}


//if (livre == 40 && chapitre == 1 && verset == 17){console.log(phrase[i]+' '+phrase[i+1]+' '+phrase[i+2])}


//de jusqu'?? de le + de ... -- de jusqu'au ...
if (
	phrase_morph[i].includes('pr??position impropre,g??nitif') && phrase[i] == "de jusqu'??" &&
	phrase_morph[i+1].includes('d??terminant') && phrase[i+1] == "de le" &&
	phrase[i+2] == "de Christ"
	)
	{
		phrase[i] = "de jusqu'";
		phrase[i+1] = "au";
		phrase[i+2] = "Christ";
		modif = 1;

	}
}



if (phrase[i+1])
{
	if (phrase_morph[i].includes('singulier') && phrase_morph[i+1].includes('singulier'))
	{



			// le|la  +  nom
			if (phrase_morph[i].includes('d??terminant') && phrase_morph[i+1].includes('nom,'))
			{
				if (phrase[i].match(/^le$|^la$/) && phrase[i+1].match(/^[a????e??????i??o??uyh]/)
				&& !phrase_morph[i+1].match(/datig|g??nitif/)
				&& !phrase[i+1].match(/^hache$/))
				{
					phrase[i] = "l'";
					modif = 1;
				}
			}



			//de le|de la  +  de nom
			if (phrase_morph[i].includes('g??nitif') && phrase_morph[i+1].includes('g??nitif'))
			{
				if (phrase[i].match(/^de le$|^de la$/))
				{
					new_word = phrase[i+1].match(/^de (.*?)$/)[1];
					if (new_word.match(/^[a????e??????i??o??uyh]/))
					{
					phrase[i]	= "de l'";
					phrase[i+1]	= new_word;
					modif = 1;
					}
					else
					{
						if (phrase[i].match(/^de le$/))
						{
							phrase[i]	= "du";
						}

						phrase[i+1]	= new_word;
						//console.log(new_word)
					}
				}

				if (phrase[i].match(/^le$|^la$/) && phrase[i+1].match(/^de /))
				{
					new_word = phrase[i+1].match(/^de (.*?)$/)[1];
					phrase[i]	= "du";
					phrase[i+1]	= new_word;
				}

			}



			if (phrase_morph[i].includes('datif') && phrase_morph[i+1].includes('datif') && phrase[i].match(/^?? le$|^?? la$/))
			{
				new_word = phrase[i+1].match(/^?? (.*?)$/)[1];
				if (new_word.match(/^[a????e??????i??o??uyh]/))
				{
					phrase[i]	= "?? l'";
					phrase[i+1]	= new_word;
					modif = 1;
				}
				else
				{
					phrase[i+1]	= new_word;
				}
			}


	}

	else if (phrase_morph[i].includes('pluriel') && phrase_morph[i+1].includes('pluriel'))
	{

		//de les + de ... --> des ...
		if (phrase_morph[i].includes('g??nitif') && phrase_morph[i+1].includes('g??nitif') && phrase[i].match(/^de les$/))
		{
			new_word	= phrase[i+1].match(/^de (.*?)$/)[1];
			phrase[i+1]	= new_word;
			phrase[i]	= "des";

		}


		if (phrase_morph[i].includes('datif') && phrase_morph[i+1].includes('datif') && phrase[i].match(/^?? les$/))
		{
			new_word	= phrase[i+1].match(/^?? (.*?)$/)[1];
			phrase[i+1]	= new_word;
			phrase[i]	= "aux";
			//console.log(phrase[i]+' '+phrase[i+1])
		}

	}


		if (phrase_morph[i].includes('pr??position impropre,g??nitif') && phrase_morph[i+1].includes('nom,g??nitif')
			&& phrase[i].match(/de jusqu'??/)
			)
		{
				if (phrase[i].match(/^de /) && phrase[i+1].match(/^de /))
				{
					phrase[i+1]	= phrase[i+1].replace(/^de /,'');
				}

		}



		if (phrase_morph[i].includes('conjonction'))
		{
			if (phrase[i].match(/^parce que$/) && phrase[i+1].match(/^[a????e??????i??o??uyh]/) && !phrase_morph[i+1].includes('verbe'))
			{
				phrase[i] = "parce qu'";
				modif = 1;
				//console.log(phrase[i]+' '+phrase[i+1])
			}
		}


}

		//de --> d'
		if (phrase_morph[i].includes('pr??position,g??nitif') && phrase[i].match(/^de /))
		{
				new_word = phrase[i].match(/^de (.*?)$/)[1];
				if (new_word.match(/^[a????e??????i??o??uyh]/))
				{
					b_phrase=phrase[i];
					phrase[i] = "d'"+new_word;
					//console.log(phrase[i])
				}

		}


		//?? aux / nom
		if (phrase_morph[i].includes('nom,datif') &&  phrase_morph[i].includes('pluriel') && phrase[i].match(/^?? /))
		{
				phrase[i] = phrase[i].replace(/^?? /,'aux ');
		}

		//?? aux / adjectif
		if (phrase_morph[i].includes('adjectif,datif') &&  phrase_morph[i].includes('pluriel') && phrase[i].match(/^?? /))
		{
				phrase[i] = phrase[i].replace(/^?? /,'aux ');
		}



		//CLEAN

		//de de
		phrase[i] = phrase[i].replace(/^de de /,'de ');


		//?? ??
		phrase[i] = phrase[i].replace(/^?? ?? /,'?? ');
		phrase[i] = phrase[i].replace(/^?? ?? /,'?? ');

		//que que
		if (phrase[i].match(/ que$/) && phrase[i+1].match(/^que /))
		{
			//console.log(livre+':'+chapitre+':'+verset+'\n'+phrase)
			new_word = phrase[i].match(/(.*?) que$/)[1];
			phrase[i] = new_word;

		}








} //end for

} //end if test ''



		//console.log(index_nb_name[livre]+':'+chapitre+':'+verset+' '+phrase.join(' ').replace(/\s+/g,' '))

		prase_fin = phrase.join(' ').replace(/\s+/g,' ');

		//l' ...
		prase_fin = prase_fin.replace(/l' +/g,"l'");
		prase_fin = prase_fin.replace(/??/g," ?");

		
		//gen phrase brut
		phrase_brut = verset_sebastien.split('#').join(' ').replace(/\s+/g,' ')
		
		file.appendFileSync('nt-auto-seb-brut.txt', index_nb_name[livre]+':'+chapitre+':'+verset+' '+phrase_brut+'\n', 'utf8');
		
		file.appendFileSync('nt-auto-seb-net.txt', index_nb_name[livre]+':'+chapitre+':'+verset+' '+prase_fin+'\n', 'utf8');
		
		
		verset_fr[verset] = prase_fin;
		verset_fr[0] = livre+':'+chapitre+':'+verset;
		

		} //END VERSET FOR

		chapitre_fr[chapitre] = verset_fr;


	} // END CHAP


	//livre fr
	livre_fr[livre] = chapitre_fr;
	nbchapfr = livre_fr[livre].length-1;
	livre_fr[livre][0] = livre+'-'+index_nb_name[livre]+' - '+nbchapfr+' chapitres';



} // END LIVRE

//livre fr
nblivrefr = livre_fr.length-1;
livre_fr[0] = 'BIBLE SEBASTIEN NET - '+nblivrefr+' livres';
file.writeFileSync('../database/bible/francais/sebastien/sebastien_net.js','sebastien_net='+JSON.stringify(livre_fr, null, 1), 'utf8');




// match(/[\u00C0-\u00DC]|[\u0041-\u005A]/)
//			??-??				A-Z