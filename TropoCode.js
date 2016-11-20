call(+17347902224, { //call my phone number
   network:"SMS"}); //use SMS (Text message)
//say("connected to 734-790-2224");
//wait(2000);
var Min;
var Max;
var cats = false;
var i;
var link = "instantiated value"; //default string
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
    "http://1mc8511ob3uc397k3v2p939j.wpengine.netdna-cdn.com/wp-content/uploads/2016/03/plane-dog-meme-1.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-math-meme.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/dog-memes.jpg",
    "http://tpwwllc.wpengine.com/images/blogphotos/Funny/Dog%20Memes/depressed-dog-memes.jpg",
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
    
    
    ];
    
    
//say("instantiated all variables");
//wait(2000);



//say("look at initialtext");
//wait(2000);

if(currentCall.initialText == "Cats"){
    //say("initial text = Cats");
    //wait(2000);
    Min = 0;
    //say("Min = " + Min);
    //wait(2000);
    //say("calculating Max value");
    //wait(2000);
    Max = catlinks.length-1;
    //say("Max = "+Max);
    //wait(2000);
    cats = true;
    //say("cats = " + cats);
    wait(2000);
    } else{
    say("initial text != Cats");
    Min = 10000000;
    Max = 73152994;
    }

//say("Min = " + Min);
//say("Max = " + Max);
//wait(2000);



i = Min + Math.floor((Math.random() * ((Max - Min) + 1))); //calc i

//say("i =" + i);
//wait(2000);


if(cats){
    link = catlinks[i];
    //say("in cats if statement --- true");
} else {
    var baselink = "https://cdn.meme.am/cache/instances/folder994/500x/";
    link = baselink + i;
    link.concat(i);
    link.concat(".jpg");
    //say("in cats if statement --- false");
}



//say("end");
//wait(2000);

//say(catlinks[i])
//say(i); //debug info
say(link);
