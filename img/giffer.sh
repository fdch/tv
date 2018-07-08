#!/bin/bash
# utility to make a rotating gif
# needs imagemagick

if [[ $1 ]] ; then source=$1; else echo "usage: <file> [<angle>,<speed>]"; exit 1 ; fi
if [[ $2 ]] ; then angle=$2 ; else angle=12 ; fi
if [[ $3 ]] ; then speed=$3 ; else speed=24 ; fi

count=0
res=0
((limit=360/$angle))
filenames=""

for i in `seq 1 $limit`
do  
	myfile="rotated-$count.png"
	convert $source -distort ScaleRotateTranslate $res +repage $myfile
	filenames+="$myfile "
	((res=$angle*$i))
	((count=$count+1))
done

convert -loop 0 -delay "1x$speed" $filenames result.gif 

for i in $filenames
do
	rm $i
done
