call(+17347902224, { //call my phone number
   network:"SMS"}); //use SMS (Text message)
//say("connected to 734-790-2224");
//wait(2000);
say("Options: cats, dogs, kermit, frog, presidential, bad advice, and other";

var Min;
var Max;
var cats = false;
var dogs = false;
var presidential = false;
var kermit = false;
var badAdvice = false;
var i;
var link = "instantiated value"; //default string
var kermitLinks = [
   "http://scontent-b.cdninstagram.com/hphotos-xfp1/t51.2885-15/10488613_262644750609036_1331187894_n.jpg",
   "http://www.sawyoo.com/postpic/2009/10/lipton-tea-kermit-meme_351598.jpg" ,
   "http://www.sawyoo.com/postpic/2009/10/kermit-the-frog-drinking-tea-memes_351608.png",
   "http://www.thaproducesection.com/wp-content/uploads/2014/07/kermit3.png",
   "http://e.lvme.me/uc9tf35.jpg",
   "http://i2.cdn.turner.com/dr/hln/www/release/sites/default/files/static/images/AnnaL/kermitshade.jpg",
   "https://i.imgflip.com/tgt9d.jpg",
   "https://s-media-cache-ak0.pinimg.com/736x/d6/04/93/d604936eaa5617d798cd9ece56c028f1.jpg",
   "https://s-media-cache-ak0.pinimg.com/736x/fb/54/80/fb5480c3a220d354faf7c7b746bbd283.jpg",
   "https://i.imgflip.com/er9r4.jpg",
   "http://thumbpress.com/wp-content/uploads/2014/08/funny-tea-Kermit-business-money1.jpg",
   "http://67.media.tumblr.com/27d09d3382557592fb3e7dc386595bfb/tumblr_n7u5zlzYDW1sxym1zo1_1280.jpg"];
   
var catlinks = [
    "http://www.lolcats.com/images/u/11/45/lolcatsdotcom3gp6wm7dw3jihq9t.jpg"  ,
    "http://www.lolcats.com/images/u/08/50/lolcatsdotcomur5dhkw464f8hb16.jpg"  ,
    "http://www.lolcats.com/images/u/08/42/lolcatsdotcom2ej0ezv4iv55y3ke.jpg"  ,
    "http://www.lolcats.com/images/u/08/19/lolcatsdotcomzub8u25yk0s2egi5.jpg"  ,
    "http://www.lolcats.com/images/u/11/43/lolcatsdotcomsyucc7vghgeu3ygu.jpg"  ,
    "http://www.lolcats.com/images/u/12/43/lolcatsdotcomnapkin.jpg"            ,
    "http://www.lolcats.com/images/u/08/29/lolcatsdotcompf8w6i8liikl5j5x.jpg"  ,
    "http://www.lolcats.com/images/u/08/46/lolcatsdotcombsr71ehdl7l9ocf2.jpg"  ,
    "http://www.lolcats.com/images/u/08/47/lolcatsdotcom4i1bx7w5csp6za6f.jpg"  ,
    "http://www.lolcats.com/images/u/09/03/lolcatsdotcom9smdlfcjhutnm748.jpg"  ,
    "http://www.lolcats.com/images/u/08/21/lolcatsdotcomk0l02y5bkb1ktiqf.jpg"  ,
    "http://www.lolcats.com/images/u/12/24/lolcatsdotcom-found-it.jpg"         ,
    "http://www.lolcats.com/images/u/08/28/lolcatsdotcomfmjonvyyl03qg704.jpg"  ,
    "http://www.lolcats.com/images/u/11/46/lolcatsdotcomqc2oos4nrd7aymcl.jpg"];
var doglinks = [
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/plane-dog-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-math-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-memes.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/depressed-dog-memes.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-memes-funniest.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/become-the-squirrel.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/benson-dog-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-mirror.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-think-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-meme-treat.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/calm-down-dog.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/yes-this-is-dog.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/most-interesting-man-memes.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/internet-dog-memes.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/funny-dog-memes.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-storyteller.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-stoned-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/funniest-dog-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/baffled-boxer.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-no-idea.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-OMG.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-memes-best.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-meme-funny.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-mem-wink.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-lawyer.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-jesus-memes.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-home-early.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-hipster.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-food-memes.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-fight-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-dream-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-balls-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/chef-dog-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/best-dog-memes-ever.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/begging-dog.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/bbq-dog.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-meme-best.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/pun-dog-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-pole-dancer.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-pug-life.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-ruff.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-rug.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-skeptical.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/baby-dog-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/driving-dog.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/husky-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/puppy-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/i-have-no-idea-what-Im-doing.jpg"
    ];
    
var badAdviceLinks = [
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/03/malicious-advice-mallard-valentines-day-gift.jpg", 
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/03/malicious-advice-mallard-tattoo-name.jpg", 
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/03/malicious-advice-mallard-snap-your-fingers.jpg", 
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/03/malicious-advice-mallard-save-relationship-baby.jpg", 
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/03/malicious-advice-mallard-resist-arrest.jpg", 
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/03/malicious-advice-mallard-no-offense.jpg", 
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/03/malicious-advice-mallard-quick-exit-in-a-crowd.jpg", 
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/03/malicious-advice-mallard-nature-valley-bar.jpg", 
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/03/malicious-advice-mallard-more-work-breaks.jpg", 
    "http://www.memecenter.com/fun/992950/bad-advice-cat", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-Bacon-Grease.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-Calm-Down.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-Facebook-Bikini-Photos.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-Foreign-Person.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-Haircut.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-Hug.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-Ice-Cream-Spoon.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-Interview.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-Jury-Duty-Felony.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-MeMe.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-MemeText.png", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-Dont.png", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-microwave.jpg", 
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-no-Offense.jpg"
];


var curr = currentCall.initialText
curr.toLowerCase();
curr.trim();

if ((curr == "cats") || (curr == "cat")){
    Min = 0;
    Max = catlinks.length-1;
    cats = true;
} 
else if ((curr == "dogs") || (curr == "dog")) {
    Min = 0;
    Max = doglinks.length-1;
    dogs = true;
} 
else if ((curr == "kermit") || (curr == "frog")) {
    Min = 0;
    Max = kermitLinks.length-1;
    kermit = true;
} 
else if ((curr == "presidential") || (curr == "presedential") || (curr == "presedintial") || (curr == "presedintial")) {
    Min = 1;
    Max = 17;
    presidential = true;
}
else if (curr == "advice" || curr == "bad advice" || curr == "bad") {
    Min = 0;
    Max = badAdvice.length-1;
    badAdvice = true;
} 
else {
    Min = 10000000;
    Max = 73152994;
}




i = Min + Math.floor((Math.random() * ((Max - Min) + 1))); //calc i



if (cats){
    link = catlinks[i];

} 
else if (dogs){
    link = doglinks[i];
} 
else if (kermit){
    link = kermitLinks[i];
} 
else if (presidential){
    link = "http://cdn.pinknews.co.uk/images/2016/11/obama-biden-meme-" + i + ".jpg";
    
} 
else if (badAdvice) {
    link = badAdvice[i];
}
else {
    link = "https://cdn.meme.am/cache/instances/folder994/500x/" + i + ".jpg";

}


say(link);
