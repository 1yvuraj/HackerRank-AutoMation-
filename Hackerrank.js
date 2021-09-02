let puppeteer = require('puppeteer');
// creates headless browser
let browserStartPromise = puppeteer.launch({
    
    // visible browser window
    headless: false,
    // type spped 1 sec to prove it is done manually 
   slowMo : 200,
    //to open the browser full screen
    // setViewport:{ width: 1920, height: 1040 },
    defaultViewport: null,
    args:[ '--window-size=1920,1040',"--disable-notifications"]
});

let nextTab1;
let arr=[];

browserStartPromise.then(function (browserObj){
    console.log("browser opened");
    nextTab1=browserObj;
    let browserTabOpenPromise =  browserObj.newPage();
   return  browserTabOpenPromise;

}).then(function (newtab){
   
     page=newtab;
     console.log("new tab opened");
     let gpageopen=newtab.goto("https://www.google.com/");
     return gpageopen;
}).then(function (){
    console.log("GooglePagrOpen");
    
     let pepcodingSite=page.type("input[title ='Search']","HackerRank");
     return pepcodingSite;
 
 }).then(function (){
     console.log("wait for element to be visibale");
     
      let enterwillbedone=page.keyboard.press("Enter",{delay:100});
      return enterwillbedone;
 }).then(function (){
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector(".LC20lb.DKV0Md",{visible:true});
     return waitForElement;
}).then(function (){
    
    console.log("click");
     let elemClick=page.click(".LC20lb.DKV0Md");
     return elemClick;

}).then(function (){
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("#menu-item-2887",{visible:true});
    
     return waitForElement;

}).then(function (){
    
    console.log("click");
     let elemClick=page.click("#menu-item-2887");
     return elemClick;
}).then(function (){
    arr=
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("div.fl-button-wrap.fl-button-width-auto.fl-button-left>a",{visible:true});
    
     return waitForElement;

}).then(function (){
    
    console.log("click");
     let elemClick=page.click("div.fl-button-wrap.fl-button-width-auto.fl-button-left>a");
     return elemClick;
}).then(function (){
    arr=
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("input#input-1.input",{visible:true});
    
     return waitForElement;
}).then(function (){
    console.log("Enter Your Email");
    
     let pepcodingSite=page.type("input#input-1.input","xotomoc779@macauvpn.com");
     return pepcodingSite;
}).then(function (){
    console.log("Enter Your Passward");
    
     let pepcodingSite=page.type("input#input-2.input","Yuvraj",{delay:100});
     return pepcodingSite;
}).then(function (){
    
    console.log("click");
     let elemClick=page.click("button.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
     return elemClick;
}).then(function (){
  
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector(".track-name",{visible:true});
    
     return waitForElement;
}).then(function (){
    
     console.log("click");
     let elemClick=page.click(".track-name");
     return elemClick;
}).then(function (){
  
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector("h4.challengecard-title",{visible:true});
    
     return waitForElement;
}).then(function (){
    
    console.log("click");
    let elemClick=page.click("h4.challengecard-title");
    return elemClick;

})














// Scanner scn=new Scanner(System.in);
// int a=scn.nextInt();
//  int b=scn.nextInt();
//  int c;
//  c=a+b;
//  System.out.print(c);