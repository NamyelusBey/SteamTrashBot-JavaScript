var Steam = require("steam");
var SteamUser = require ("steam-user");
var client = new SteamUser();

var friends = new Steam.SteamFriends(client.client);

var SteamCommunity = require('steamcommunity');
var community = new SteamCommunity();

var client;

var SteamID = require("steamid");

var SteamTrade = require("steam-trade");
var SteamTrade = new SteamTrade();

////////////////////// CHANGE ONLY YourAccountName, YourPassword and STEAMID IN WITHDRAW

client.logOn({
   "accountName": "xtrashboy",
   "password": "5erf8ujm7rtg1azx"
 });

 client.on("loggedOn", function(details){
   console.log("Logged On To Steam Server With The ID Of " + client.steamID.getSteam3RenderedID());
   client.setPersona(SteamUser.Steam.EPersonaState.Online);
   client.gamesPlayed(730);
 });
console.log("------------------------------------------------------------------")
console.log("CHANGE ONLY YourAccountName, YourPassword and STEAMID IN WITHDRAW")
console.log("##  SteamBot Made by GumikCZ  ##")
console.log("Have a problem?? My youtube channel: Gumik Hraje!")
console.log("My GitHub with Projects: https://github.com/DrGumik")
console.log("------------------------------------------------------------------")

client.on("webSession", function(steamID, cookies){
community.setCookies(cookies);
SteamTrade.sessionID = cookies[0].split("=")[1];
cookies.forEach(function(cookie)  {
SteamTrade.setCookie(cookie);
});

 client.on("error", function(error){
   console.log("Error");
});

friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "Hello"){
   friends.sendMessage(user,"Hello!Send me trade invite.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
SteamTrade.on("chatMsg", function(msg)  {
if (msg == "!itemcsgo" && "Your STEAMID") //// Change !itemcsgo on your !password  ,  You can find steamID on steamrep.com
console.log("Giving Items from CSGO!");
SteamTrade.loadInventory(730,2, function(items){
SteamTrade.addItems(items);
   })
 })
})
/////////////////////////////////////////////////////////////////
SteamTrade.on("ready", function()  {
SteamTrade.ready(function()  {
  SteamTrade.confirm();
 })
})

client.on("tradeStarted", function(steamID){
  SteamTrade.open(steamID);
})

client.on("tradeRequest", function(steamID, respond){
  console.log("Somone Is Ready To Trade"+ client.steamID.getSteam3RenderedID());
  respond(true);
})

SteamTrade.on('end', function(status, getItems) {
  if (status == 'complete') {
    getItems(function(items) {
      console.log(items);
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
//// UPDATE V.3
///////////////////////////////////////////////////////////////////////////////
client.on('friendRelationship', function(sid, relationship) {
    if(relationship == 2) {
        client.addFriend(sid);
        console.log("BOT #1: Added a new friend!");
        client.chatMessage(sid, 'Hi! I am a bot!');
    }
});

///////////////////////////////////////////////////////////////////////////////
////My GitHub: https://github.com/DrGumik
///////////////////////////////////////////////////////////////////////////////
