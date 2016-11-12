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

client.logOn({
   "accountName": "YourAccountLoginName",
   "password": "YourPassword"
 });

 client.on("loggedOn", function(details){
   console.log("Logged On To Steam Server With The ID Of " + client.steamID.getSteam3RenderedID());
   client.setPersona(SteamUser.Steam.EPersonaState.Online);
   client.gamesPlayed(440);
 });

console.log("##  SteamBot Made by GumikCZ  ##")

client.on("webSession", function(steamID, cookies){
community.setCookies(cookies);
SteamTrade.sessionID = cookies[0].split("=")[1];
cookies.forEach(function(cookie)  {
SteamTrade.setCookie(cookie);
});

 client.on("error", function(error){
   console.log("Error");
});
///////////////////////////////////////////////////////////////////////////////
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "/commands"){
   friends.sendMessage(user,"The Commands Are: /joke");
   }
 }
})

SteamTrade.on("chatMsg", function(msg)  {
if (msg == "!item" && "76561198065953943")
console.log("Giving Items");
SteamTrade.loadInventory(730,1, function(items){
SteamTrade.addItems();
   })
 })
})

client.on("tradeStarted", function(steamID){
  SteamTrade.open(steamID)
})

SteamTrade.on("ready", function()  {
  SteamTrade.ready(function()  {
    SteamTrade.confirm();
 })
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
