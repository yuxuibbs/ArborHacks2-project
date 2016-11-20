call(+17347902224, { //call my phone number
   network:"SMS"}); //use SMS (Text message)


var Min;  //bottom random number value
var Max;  //top random number value
var cats = false;  //is the user searching for cat memes?
var dogs = false;  //is the user searching for dog memes?
var presidential = false;  //is the user searching for presidential memes?
var kermit = false;  //is the user searching for kermit the frog memes?
var badAdvice = false;  //is the user searching for bad advice memes?
var doge = false;  //is the user searching for doge memes?
var confessionBear = false;
var random;  //the random number which links are based on
var link = "instantiated value"; //default msg if it is not changed (error check)


var confessionBearLinks = [
    "http://s2.quickmeme.com/img/f3/f30a136a3909f20ce1d38a64436ef477adc938b480e8253179d3378f890cfbcc.jpg",
    "http://img.memecdn.com/confession-bear_o_1016916.jpg",
    "http://icdn4.digitaltrends.com/image/confession-bear-murder-641x485.png",
    "http://1mut.com/wp-content/uploads/2012/08/Confession-Bear-meme-collection-1mut.com-24.jpg",
    "http://i3.kym-cdn.com/photos/images/masonry/000/724/353/4fb.jpg",
    "http://images-cdn.9gag.com/photo/apBzREp_700b.jpg",
    "http://s2.quickmeme.com/img/a6/a6ad3f8472caa777f2b83c2ea18ab078927c56ceeba5ea39ed1715453d948307.jpg",
    "http://2damnfunny.com/wp-content/uploads/2013/07/Confession-Bear-Meme-Is-Actually-A-Very-Worried-Bear-Cub.jpg",
    "http://1mut.com/wp-content/uploads/2012/08/Confession-Bear-meme-collection-1mut.com-18.jpg",
    "http://images-cdn.9gag.com/photo/aRVxz05_700b_v1.jpg",];




var kermitLinks = [  //links to kermit memes
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
   
var catlinks = [  //links to cat memes
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
    

var dogelinks = [ //links to doge memes
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/shibe.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/shibe-meme-wont-go.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/trapped-shiba.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/doge-dj.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/doge-meme-plant.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/shibe-goes-to-work.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/no.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/why-are-you-a-dog-comic.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/bob-ross.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/shiba-versus-cat.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/shiba-listens-to-music.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/becoming-doge.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/shiba-inu-tucked-in-bed.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/doge-resume.png",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/how-to-get-a-shibe.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/so-fashionable.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/fashion-doge.jpg",
    "http://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/so-scared.jpg"];
    
    
var doglinks = [  //links to dog memes
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
    
var badAdviceLinks = [  //links to bad advice memes
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
    "http://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-malicious-advice-mallard-meme-no-Offense.jpg"];

//curr is a string recieved from the user via SMS
var curr = currentCall.initialText;
curr = curr.toLowerCase();  //make curr all lower case
curr = curr.trim();  //make curr have no whitespace

//check to see if the user wants cats (and misspellings)
if((curr == "cats") || (curr == "cat")){
    
    Min = 0;  
    Max = catlinks.length-1;
    cats = true;
    
//check to see if the user wants dogs (and misspellings)
} else if((curr == "dogs") || (curr == "dog")) { //check to see if the user wants dogs (and misspellings)
    
    Min = 0;
    Max = doglinks.length-1;
    dogs = true;
    
//check to see if the user wants doge (and misspellings)
}  else if((curr == "doge") || (curr == "doges")) { //check to see if the user wants doge (and misspellings)
    
    Min = 0;
    Max = dogelinks.length-1;
    doge = true;
    
//check to see if the user wants kermit the frog (and misspellings)    
} else if((curr == "kermit") || (curr == "frog") || (curr == "lipton") || (curr == "tea")){
    
    Min = 0;
    Max = kermitLinks.length-1;
    kermit = true;

//check to see if the user wants dogs (and misspellings)
} else if((curr == "president") || (curr == "presedent") || (curr == "obama")|| (curr == "barack") || (curr == "joe") || (curr == "biden") || (curr == "presidential") || (curr == "presedential") || (curr == "presedintial") || (curr == "presedintial")) {
    
    Min = 1;
    Max = 17;
    presidential = true;
    
} else if((curr == "confession") || (curr == "bear") || (curr == "confession bear")) {
    Min = 1;
    Max = confessionBearLinks.length-1;
    confessionBear = true;
    
}else if (curr == "advice" || curr == "bad advice" || curr == "bad") {
    Min = 0;
    Max = badAdviceLinks.length-1;
    badAdvice = true;
}  else {
    Min = 10000000;
    Max = 73152994;
}




i = Min + Math.floor((Math.random() * ((Max - Min) + 1))); //calc i



if(cats){
    link = catlinks[i];

} else if(dogs){
    link = doglinks[i];

} else if(kermit){
    link = kermitLinks[i];
    
} else if(presidential){
    link = "http://cdn.pinknews.co.uk/images/2016/11/obama-biden-meme-" + i + ".jpg";
    
} else if(badAdvice) {
    link = badAdviceLinks[i];
    
} else if(confessionBear) {
    link = confessionBearLinks[i];
    
} else if(doge) {
    link = dogelinks[i];

}else {
    link = "https://cdn.meme.am/cache/instances/folder994/500x/" + i + ".jpg";

}
say(link);

wait(4000);
say("Options: cats, dogs, kermit, frog, presidential, doge, confession bear, bad advice, and random");
