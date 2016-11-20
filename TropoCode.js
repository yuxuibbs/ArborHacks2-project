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
var firstWorldProblems = false;
var insultMe = false;
var harambe = false;
var iToLikeToLiveDangerously = false;
var inspiringWolves = false;
var oneDoesNotSimply = false;
var random;  //the random number which links are based on
var link = "instantiated value"; //default msg if it is not changed (error check)

var oneDoesNotSimplyLinks = [
    "https://i.imgflip.com/vpq.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/1b/63/a5/1b63a56bbc4a025458f6cc71a6bffec4.jpg",
    "https://i.imgflip.com/zttfi.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/46/f7/98/46f798f2ae434cc82d741618defb63f9.jpg",
    "http://vignette2.wikia.nocookie.net/tmnt/images/2/2b/One-does-not-simply-make-a-meme_o_1189284.jpg/revision/latest?cb=20140103235223",
    "http://funnypicturesplus.com/wp-content/uploads/2012/05/one-does-not-simply-leave-a-marvel-movie.jpg",
    "http://images.magnetsusa.com/images/blog/meme_one_does_not.jpg",
    "http://www.lolsclub.com/wp-content/uploads/lolsclub.com-meme-maker,%20meme,%20one-does-not-simply-meme1391205408998.jpg",
    "http://images-cdn.9gag.com/photo/av00jvW_700b.jpg",
    "http://img.memecdn.com/onedoesnotsimply_o_158907.jpg",
    "https://cdn.meme.am/instances/400x/15625503.jpg",
    "http://img.memecdn.com/one-does-not-simply_o_204186.jpg",
    "https://i.imgflip.com/77hai.jpg",
    "https://breakingintotheadvertisingworld.files.wordpress.com/2014/12/meme-2.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/3e/f8/94/3ef89421c371bed0dac93efdcbe07d25.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/e6/d9/1c/e6d91c68d2a53f61b4af5c31181e83dd.jpg",
    "http://img.memecdn.com/i-also-like-to-live-dangerously_o_1076620.jpg"];

var iToLikeToLiveDangerouslyLinks = [
    "http://img.memecdn.com/i-too-also-like-to-live-dangerously_o_1625533.jpg",
    "http://s2.quickmeme.com/img/2e/2ed8bbd970126d27e49861d984bcccbfa9066b3c1e211daa8285924f3bdca626.jpg",
    "http://www.kappit.com/img/pics/201506_0951_icihi_sm.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/46/03/6e/46036eb942f8f2448317f346185f7698.jpg",
    "https://cdn.meme.am/instances/65623948.jpg",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRZoyaJq-H-9Z-O_aeHFACdQg2GTRoyt8E0vBIYD6PbShfNZvo",
    "https://i.imgflip.com/rcwll.jpg",
    "https://i.imgflip.com/5riz4.jpg",
    "http://s.quickmeme.com/img/6b/6b757b63cd508db22154ed39098603a707ea33c1b297f79f6d8df50e3e671063.jpg",
    "http://i1.kym-cdn.com/photos/images/facebook/000/511/961/bb0.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/14/8b/b9/148bb92b0f658616068a1c522f6fb014.jpg",
    "http://i2.kym-cdn.com/photos/images/list/000/577/232/c38.jpeg",
    "http://images.memes.com/meme/254597"];

var harambeLinks = [
    "https://thoughtcatalog.files.wordpress.com/2016/08/hp860uf.jpg?w=675",
    "http://i.imgur.com/Jod1Yvjl.jpg",
    "http://a2.files.maxim.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTQwOTgzNDcwNTI3NjIwNDcy.jpg",
    "https://s3.amazonaws.com/hiphopdx-production/2016/06/HarambeKanye.jpg",
    "http://thacelebritea.com/wp-content/uploads/2016/08/15427l.jpg",
    "http://i2.kym-cdn.com/photos/images/original/001/129/303/6e1.jpg",
    "https://i.guim.co.uk/img/media/0e7c0bac09562f18663efdac68c9ef4e93e713f8/0_0_592_458/master/592.jpg?w=620&q=55&auto=format&usm=12&fit=max&s=ed6e707a58da89b45a5bf0c627388379",
    "https://s3.amazonaws.com/hiphopdx-production/2016/06/HarambeCavemanSB1.jpg",
    "http://i.iheart.com/v3/url/aHR0cDovL2NvbnRlbnQuY2xlYXJjaGFubmVsLmNvbS9jYy1jb21tb24vbWxpYi83MDAvMDYvNzAwXzE0NjQ4ODk1MjEyLmpwZw==?ops=maxcontain(750,473),quality(80)",
    "http://pixel.nymag.com/imgs/daily/selectall/2016/07/27/harambe_meme_001.nocrop.w536.h2147483647.jpg",
    "http://i1.kym-cdn.com/photos/images/facebook/001/152/053/cf7.png",
    "https://bossip.files.wordpress.com/2016/06/praiseteam.png?w=551&h=440"];

var inspiringWolvesLinks = [
    "http://cdn.smosh.com/sites/default/files/bloguploads/cwolf-7.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/ea/47/51/ea4751630fce699f589e8fda6d7fdd0b.jpg",
    "https://s-media-cache-ak0.pinimg.com/564x/6c/13/d7/6c13d7465b0256bec5bcabb25df82e73.jpg",
    "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/c-wolf-bleedinbattle.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/81/1e/de/811ede82a4fb6d52acd330909b7ddd09.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/33/4c/8a/334c8a2c3179f604f8151ff95b710822.jpg",
    "http://4.bp.blogspot.com/-AGAb6WYax8U/Ty9m4bE3w1I/AAAAAAAAABw/AKdoPp800DU/s1600/level+up+wolf.jpg",
    "http://cdn.smosh.com/sites/default/files/bloguploads/cwolf-23.jpg",
    "http://fc06.deviantart.net/fs71/f/2010/364/c/6/baby_courage_wolf___episode_58_by_cryptic_metaphor292-d361u4x.jpg",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKnZyiFjxVRCaZ_RqwBAFQd4ciVRiHJ8fl513T1bFtsP6PtnD1",
    "http://i0.kym-cdn.com/photos/images/facebook/000/371/617/302.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/f8/b7/03/f8b70335498d625b2b95c33416ce0394.jpg",
    "http://memberfiles.freewebs.com/00/46/68304600/photos/Courage-wolf/-Insanity-Wolf_-Advice-puppy/memes-courage-wolf-advice-dog.jpg",
    "http://catplanet.org/wp-content/uploads/2014/09/Courage-wolf-memes-became-popular.jpg",
    "https://s-media-cache-ak0.pinimg.com/236x/f1/ab/62/f1ab62e0153e3e34a785aae2449db91c.jpg",
    "https://ih1.redbubble.net/image.48531634.2044/raf,750x1000,075,t,101010:01c5ca27c6.u2.jpg"];


var insultMeLinks = [
    "https://s-media-cache-ak0.pinimg.com/736x/cf/8c/47/cf8c476a3a07bad3646731d39fc29efd.jpg",
    "http://2.bp.blogspot.com/-v9NmS-NjrkA/U001vbLIiRI/AAAAAAAAASI/anvPnWydNLc/s1600/insults3.png",
    "https://s-media-cache-ak0.pinimg.com/236x/08/20/55/08205502897ab565e6f8d627a411e90a.jpg",
    "https://img.ifcdn.com/images/270c8a7b1199b23dab1f05bae15236ab564e0743260c4c3c29cbf3cb38d2e587_1.jpg",
    "http://thewondrous.com/wp-content/uploads/2015/01/funny-insult-quotes1.jpg",
    "https://pbs.twimg.com/profile_images/3763600008/35771929aa0943b35bf97b08ef30c379_400x400.png",
    "http://cdn.humoropedia.com/wp-content/uploads/2014/12/Funny-Insults.jpg",
    "http://cdn3.list25.com/wp-content/uploads/2013/08/Slide228.jpg"];


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


var firstWorldProblemsLinks = [
    "http://s2.quickmeme.com/img/b7/b79805730d9b8c882959c0b1e99cbd0c5d998fff881372d89f9a7e003f52d94d.jpg",
    "http://i0.kym-cdn.com/photos/images/facebook/000/267/477/82d.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/57/b6/85/57b685f61325c83782a8ab6a973f4414.jpg",
    "http://s2.quickmeme.com/img/90/909d670d1dc8eda35688c90b3eca957d4892faf9a69c08d713774638c6355bf8.jpg",
    "https://cdn.meme.am/cache/instances/folder184/400x400/17484184.jpg",
    "http://weknowmemes.com/wp-content/uploads/2012/10/first-world-kid-problems-laptop.jpg",
    "http://img.memecdn.com/first-world-problems_o_525885.jpg",
    "http://img.memecdn.com/first-world-problems_o_525888.jpg",
    "http://cdn.smosh.com/sites/default/files/bloguploads/meme-fwp-5.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/c5/2d/e2/c52de2afa485304c213d706041e22487.jpg"];


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
    
} else if((curr == "inpiring") || (curr == "inspire") || (curr == "wolf") || (curr == "inspiring wolf") || (curr == "inspiring wolves")) { //check to see if the user wants dogs (and misspellings)
    
    Min = 0;
    Max = inspiringWolvesLinks.length-1;
    inspiringWolves = true;
    
} else if((curr == "insult") || (curr == "insultme") || (curr == "insult me")) { //check to see if the user wants dogs (and misspellings)
    
    Min = 0;
    Max = insultMeLinks.length-1;
    insultMe = true;
    
}else if((curr == "live dangerously") || (curr == "i also like to live dangerously") || (curr == "i to like to live dangerously") || (curr == "i to like")) { //check to see if the user wants dogs (and misspellings)
    
    Min = 0;
    Max = iToLikeToLiveDangerouslyLinks.length-1;
    iToLikeToLiveDangerously = true;
    
}  else if((curr == "one does not simply") || (curr == "one") || (curr == "not simply") || (curr == "one does not")) { //check to see if the user wants dogs (and misspellings)
    
    Min = 0;
    Max = oneDoesNotSimplyLinks.length-1;
    oneDoesNotSimply = true;
    
} else if((curr == "harambe") || (curr == "gorilla")) { 
    
    Min = 0;
    Max = harambeLinks.length-1;
    harambe = true;
    
//check to see if the user wants doge (and misspellings)
}else if((curr == "doge") || (curr == "doges")) { //check to see if the user wants doge (and misspellings)
    
    Min = 0;
    Max = dogelinks.length-1;
    doge = true;
    
//check to see if the user wants first world problems (and misspellings)    
}   else if((curr == "first") || (curr == "world") || (curr == "problems") || (curr == "first world") || (curr == "world problems") || (curr == "first world problems")) { //check to see if the user wants doge (and misspellings)
    
    Min = 0;
    Max = firstWorldProblemsLinks.length-1;
    firstWorldProblems = true;
    
//check to see if the user wants kermit the frog (and misspellings)    
}else if((curr == "kermit") || (curr == "frog") || (curr == "kermit frog") || (curr == "kermit the frog") || (curr == "kermit the") || (curr == "lipton") || (curr == "tea")){
    
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
    
} else if(inspiringWolves) {
    link = inspiringWolvesLinks[i];
    
} else if(badAdvice) {
    link = badAdviceLinks[i];
    
} else if(iToLikeToLiveDangerously) {
    link = iToLikeToLiveDangerouslyLinks[i];
    
} else if(firstWorldProblems) {
    link = firstWorldProblemsLinks[i];
    
} else if(confessionBear) {
    link = confessionBearLinks[i];
    
} else if(harambe) {
    link = harambeLinks[i];
    
} else if(oneDoesNotSimply) {
    link = oneDoesNotSimplyLinks[i];
    
} else if(insultMe) {
    link = insultMeLinks[i];
    
} else if(doge) {
    link = dogelinks[i];

}else {
    link = "https://cdn.meme.am/cache/instances/folder994/500x/" + i + ".jpg";

}
say(link);

wait(5000);
say("Choices: cats, dogs, kermit the frog, presidential, one does not simply, I to like to live dangerously, insult me");
wait(1500);
say("inspiring wolves, harmabe, doge, first world problems, confession bear, bad advice, and random");
