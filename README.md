Ce-présent repository ne contient aucune traduction copyrighté "en dur" : seul le droit de citation est usé, c'est-à-dire que ces dernières ne sont disponibles et stockées que partiellement selon les fichiers de comparaison.<br>
<br>
Ainsi, aucune traduction copyrightée du Nouveau Testament n'est disponible au téléchargement dans ce-présent repository.<br>
En revanche, les traductions libre de droit sont disponibles pour téléchargement dans le dossier database du repository.

Commande : 

<br>
TOUT REGENERER EN AUTO


@echo off<br>
cls<br>
<br>
echo TRADUIRE<br>
echo ========<br>
cd traduire<br>
node traduire_brut.js<br>
node traduire_net.js<br>
cd ..<br>
<br>
<br>
Attention à cette commande suivante, elle regénère le comparateur de traductions!
echo COMPARER FRANCAIS<br>
echo =================<br>
cd comparer-francais<br>
node make.js<br>
cd ..<br>
<br>
<br>
echo COMPARER FRANCAIS MINI<br>
echo ======================<br>
cd comparer-francais-mini<br>
node make.js<br>
cd ..<br>


echo COMPARER GREC<br>
echo =============<br>
cd comparer-grec<br>
node make.js<br>
cd ..<br>
<br>
<br>
echo LIRE FRANCAIS<br>
echo =============<br>
cd lire-francais<br>
node make.js<br>
cd ..<br>
<br>
<br>
echo LEMME<br>
echo =====<br>
cd lemme<br>
node make.js<br>
cd ..<br>
