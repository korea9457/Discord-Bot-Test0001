const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on('ready', () => {

  console.log('Discord Bot!');

});

client.on('message', message => {

  if (message.author.bot) {

    return;

  }

    //인사

    if (message.content.startsWith('안녕')) {
  
      message.reply('```님 안녕하세요\n봇의 도움말을 보시려면 !Help 또는 !도움말을 치세요!```');
  
    }

    //도움말1
  
    if (message.content === '!Help') {
  
      message.channel.send('```\n#도움말#\n!제작자\n!성능\n!봇 버전\n!도메인\n!정보\n!채팅 청소\n!Google\n!Naver\n!Daum\n!Youtube\n페이지 1(1/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');
  
    }
  
    if (message.content === '!help') {
  
      message.channel.send('```\n#도움말#\n!제작자\n!성능\n!봇 버전\n!도메인\n!정보\n!채팅 청소\n!Google\n!Naver\n!Daum\n!Youtube\n페이지 1(1/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');
  
    }
  
    if (message.content === '!도움말') {
  
      message.channel.send('```\n#도움말#\n!제작자\n!성능\n!봇 버전\n!도메인\n!정보\n!채팅 청소\n!Google\n!Naver\n!Daum\n!Youtube\n페이지 1(1/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');
  
    }

    if (message.content === '!도움말1') {
  
      message.channel.send('```\n#도움말#\n!제작자\n!성능\n!봇 버전\n!도메인\n!정보\n!채팅 청소\n!Google\n!Naver\n!Daum\n!Youtube\n페이지 1(1/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');
  
    }
  
    if (message.content === '!help1') {
  
      message.channel.send('```\n#도움말#\n!제작자\n!성능\n!봇 버전\n!도메인\n!정보\n!채팅 청소\n!Google\n!Naver\n!Daum\n!Youtube\n페이지 1(1/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');
  
    }

    if (message.content === '!Help1') {
  
      message.channel.send('```\n#도움말#\n!제작자\n!성능\n!봇 버전\n!도메인\n!정보\n!채팅 청소\n!Google\n!Naver\n!Daum\n!Youtube\n페이지 1(1/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');
  
    }

    if (message.content === '!ehdnaakf') {

      message.channel.send('```\n#도움말#\n!제작자\n!성능\n!봇 버전\n!도메인\n!정보\n!채팅 청소\n!Google\n!Naver\n!Daum\n!Youtube\n페이지 1(1/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');

    }

    if (message.content === '!ehdnaakf1') {

      message.channel.send('```\n#도움말#\n!제작자\n!성능\n!봇 버전\n!도메인\n!정보\n!채팅 청소\n!Google\n!Naver\n!Daum\n!Youtube\n페이지 1(1/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');

    }

    //도움말2
  
    if (message.content === '!Help2') {
  
      message.channel.send('```\n#도움말#\n!랜덤뽑기\n!따라 말하기\n!검색 (Naver,네이버/Daum,다음/Nate,네트온/Zum,줌/Youtube,유튜브/Google,구글)\n!개발중\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n페이지 2(2/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');
  
    }
  
    if (message.content === '!help2') {
  
      message.channel.send('```\n#도움말#\n!랜덤뽑기\n!따라 말하기\n!검색 (Naver,네이버/Daum,다음/Nate,네트온/Zum,줌/Youtube,유튜브/Google,구글)\n!개발중\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n페이지 2(2/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');
  
    }
  
    if (message.content === '!도움말2') {
  
      message.channel.send('```\n#도움말#\n!랜덤뽑기\n!따라 말하기\n!검색 (Naver,네이버/Daum,다음/Nate,네트온/Zum,줌/Youtube,유튜브/Google,구글)\n!개발중\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n페이지 2(2/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');
  
    }

    if (message.content === '!ehdnaakf2') {

      message.channel.send('```\n#도움말#\n!랜덤뽑기\n!따라 말하기\n!검색 (Naver,네이버/Daum,다음/Nate,네트온/Zum,줌/Youtube,유튜브/Google,구글)\n!개발중\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n페이지 2(2/2)\n봇으로 도배를 하면 오류가 날 수 있으니 도배를 하지 마세요!\nNetwork봇에서 참고한 것도 있습니다.```');

    }

    //제작자
  
    if (message.content === '!제작자') {
  
      message.channel.send('제작자 : 코리아_9745#8219\n제작자 부계정 : 0000#8685\n대부분 코드에 도움 주신 분 : Gothic#1771');
  
    }

    //봇 실행 PC 성능
  
    if (message.content === '!성능') {
  
      message.channel.send('CPU : AMD Ryzen 5 2400G\nRAM : DDR4 16GB\nGRAPHICS : RADEON RX 570 Series\nMain Board : GIGABITE A32IM-S2H\nCPU-Z에 나와있는 것들만 섰습니다.');
  
    }

    //마인크래프트 도메인
  
    if (message.content === '!도메인') {
  
      message.channel.send('마인크래프트 코리아_9745님의 서버 도메인 주소 : minecraftser.kro.kr:25565\n마인크래프트 서버에 안 들어가 진다면 하마치를 깔아서 마인크래프트 네트워크 서버에 들어와 보세요!\n하마치 서버 이름 : minecraftkorea9745server2\n하마치 서버 비밀번호는 개인(코리아_9745#8219) 채팅으로 주세요!');
  
    }

    //봇 정보
  
    if (message.content === '!정보') {
  
      message.channel.send('#정보#\n봇 이름 : KoreaBot\n개발 날짜 : 2020.05.12\n개발자 : 코리아_9745');
  
    }

    //봇 버전
  
    if (message.content === '!봇 버전') {
  
      message.channel.send('봇 버전 : Alpha 1.0.3');
  
    }

    //채팅 청소
  
    if (message.content === '!채팅청소') {
  
      message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n채팅청소 1번이 완료 되었습니다.');
      message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n채팅청소를 완료 하였습니다!');
  
    }
  
    if (message.content === '!채팅 청소') {
  
      message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n채팅청소 1번이 완료 되었습니다.');
      message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n채팅청소를 완료 하였습니다!');
  
    }

    //욕 감지

    if (message.content.startsWith('씨발')) {

      message.reply('님이 욕을 하였습니다!');

    }

    if (message.content.startsWith('ㅗ')){

      message.reply('님이 욕을 하였습니다!');

    }

    if (message.content.startsWith('엿')) {

      message.reply('님이 욕을 하였습니다!');

    }

    if (message.content.startsWith('병신')) {

      message.reply('님이 욕을 하셨습니다.');

    }

    //대답
  
    if (message.content.startsWith('흠')) {
  
      message.channel.send('음...');
  
    }
  
    if (message.content.startsWith('흐음')) {
  
      message.channel.send('...');
  
    }
  
    if (message.content.startsWith('음')) {
  
      message.channel.send('...?');
  
    }
  
    if (message.content.startsWith('으음')) {
  
      message.channel.send('...!');
  
    }

    //인터넷
  
    if (message.content === '!Google') {
  
      message.channel.send('https://www.google.com/');
  
    }
  
    if (message.content === '!google') {
  
      message.channel.send('https://www.google.com/');
  
    }
  
    if (message.content === '!Naver') {
  
      message.channel.send('https://www.naver.com/');
  
    }
  
    if (message.content === '!naver') {
  
      message.channel.send('https://www.naver.com/');
  
    }
  
    if (message.content === '!Daum') {
  
      message.channel.send('https://www.daum.net/');
  
    }
  
    if (message.content === '!daum') {
  
      message.channel.send('https://www.daum.net/');
  
    }

    if (message.content === '!Youtube') {

      message.channel.send('https://www.youtube.com/');

    }

    if (message.content === '!youtube') {

      message.channel.send('https://www.youtube.com/');

    }

    //개발중인 것들
  
    if (message.content === '!개발중') {
  
      message.channel.send('검색 기능 -- 성공');
  
    }

    //랜덤 뽑기

    if (message.content.startsWith('!랜덤뽑기')) {

      message.channel.send("뽑는 중...")
      var te = message.content.substring(4)
      var text2 = message.content.split(' ');
      var rper = Math.floor(Math.random()*2);

      if (te <4) {

        message.channel.send("!랜덤 변수 변수 로 입력 해 주세요.")
        return;

      }

      if (rper == 0) {

        message.channel.send("랜덤 뽑기 추첨 결과는 "+text2[1]+"입니다.");
    
      }
    
      if (rper == 1) {
    
        message.channel.send("랜덤 뽑기 추첨 결과는 "+text2[2]+"입니다.");
    
      }

    }

    //대답 2

    if (message.content.startsWith('ㅋ')) {
  
      message.reply('님 왜웃으시죠?...');
  
    }

    if (message.content.startsWith('ㅎ')) {

      message.channel.send('ㅎㅎ');

    }

    if (message.content.startsWith('?')) {
    
      message.channel.send('???');

    }

    if (message.content.startsWith('!!')) {

      message.channel.send('!!!');

    }

    //코리아봇 부르기

    if (message.content.startsWith('!코리아 봇')) {

      message.reply('네!');

    }

    //코리아봇 바보

    if (message.content.startsWith('코리아봇 바보')) {

      message.channel.send('저는 바보가 아닙니다...');

    }

    //바보

    if (message.content.startsWith('바보')) {

      message.channel.send('저는 바보가 아니에요........;;');

    }

    //코리아봇 멍청이

    if (message.content.startsWith('코리아봇 멍청이')) {

      message.channel.send('저는 멍청이가 아니에요..;;');

    }

    //멍청이

    if (message.content.startsWith('멍청이')) {

      message.channel.send(';;;;');

    }

    //따라 말하기

    if (message.content.startsWith('!따라말하기')){

      var te4 = message.content.substring(5)
      var text4 = message.content.split('!따라말하기 ');
      
      if (te4 < 5){

        message.channel.send('따라 말하기에 말을 써 주세요.')
        return;
  
      }

      message.channel.send("[ 따라 말하기 ] "+text4[1]+"");

    }

    //따라 말하기

    if (message.content.startsWith('!따라 말하기')){

      var te5 = message.content.substring(5)
      var text5 = message.content.split('!따라 말하기 ');
      
      if (te5 < 5){

        message.channel.send('따라 말하기에 말을 써 주세요.')
        return;
  
      }

      message.channel.send("[ 따라 말하기 ] "+text5[1]+"");

    }

    //구글 검색

    if (message.content.startsWith('!검색 google ')) {

      var text2 = message.content.split('!검색 google ');
      var te4 = message.content.substring(8)

      if (te4 < 9) {

        message.channel.send('!검색 Google 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://www.google.com/search?q="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 Google ')) {

      var text2 = message.content.split('!검색 Google ');
      var te4 = message.content.substring(8)
      
      if (te4 < 9) {

        message.channel.send('!검색 Google 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://www.google.com/search?q="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 구글 ')) {

      var text2 = message.content.split('!검색 구글 ');
      var te4 = message.content.substring(4)
      
      if (te4 < 9) {

        message.channel.send('!검색 Google 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://www.google.com/search?q="+text2[1]+"");

    }

    //네이버 검색

    if (message.content.startsWith('!검색 naver ')) {

      var text2 = message.content.split('!검색 naver ');
      var te4 = message.content.substring(7)
      
      if (te4 < 9) {

        message.channel.send('!검색 Naver 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 Naver ')) {

      var text2 = message.content.split('!검색 Naver ');
      var te4 = message.content.substring(7)
      
      if (te4 < 9) {

        message.channel.send('!검색 Naver 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 네이버 ')) {

      var text2 = message.content.split('!검색 네이버 ');
      var te4 = message.content.substring(5)
      
      if (te4 < 9) {

        message.channel.send('!검색 Naver 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query="+text2[1]+"");

    }

    //유튜브 검색

    if (message.content.startsWith('!검색 youtube ')) {

      var text2 = message.content.split('!검색 youtube ');
      var te4 = message.content.substring(9)
      
      if (te4 < 9) {

        message.channel.send('!검색 Youtube 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://www.youtube.com/results?search_query="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 Youtube ')) {

      var text2 = message.content.split('!검색 Youtube ');
      var te4 = message.content.substring(9)
      
      if (te4 < 9) {

        message.channel.send('!검색 Youtube 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://www.youtube.com/results?search_query="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 유튜브 ')) {

      var text2 = message.content.split('!검색 유튜브 ');
      var te4 = message.content.substring(5)
      
      if (te4 < 9) {

        message.channel.send('!검색 Youtube 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://www.youtube.com/results?search_query="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 유튭 ')) {

      var text2 = message.content.split('!검색 유튭 ');
      var te4 = message.content.substring(4)
      
      if (te4 < 9) {

        message.channel.send('!검색 Youtube 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://www.youtube.com/results?search_query="+text2[1]+"");

    }

    //다음 검색

    if (message.content.startsWith('!검색 daum ')) {

      var text2 = message.content.split('!검색 daum ');
      var te4 = message.content.substring(6)
      
      if (te4 < 9) {

        message.channel.send('!검색 Daum 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 Daum ')) {

      var text2 = message.content.split('!검색 Daum ');
      var te4 = message.content.substring(6)
      
      if (te4 < 9) {

        message.channel.send('!검색 Daum 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 다음 ')) {

      var text2 = message.content.split('!검색 다음 ');
      var te4 = message.content.substring(4)
      
      if (te4 < 9) {

        message.channel.send('!검색 Daum 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q="+text2[1]+"");

    }

    //네트온 검색

    if (message.content.startsWith('!검색 nate ')) {

      var text2 = message.content.split('!검색 nate ');
      var te4 = message.content.substring(6)
      
      if (te4 < 9) {

        message.channel.send('!검색 Nate 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://search.daum.net/nate?thr=sbma&w=tot&q="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 Nate ')) {

      var text2 = message.content.split('!검색 Nate ');
      var te4 = message.content.substring(6)
      
      if (te4 < 9) {

        message.channel.send('!검색 Nate 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://search.daum.net/nate?thr=sbma&w=tot&q="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 네이트 ')) {

      var text2 = message.content.split('!검색 네이트 ');
      var te4 = message.content.substring(5)
      
      if (te4 < 9) {

        message.channel.send('!검색 Nate 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttps://search.daum.net/nate?thr=sbma&w=tot&q="+text2[1]+"");

    }

    //줌 검색

    if (message.content.startsWith('!검색 zum ')) {

      var text2 = message.content.split('!검색 zum ');
      var te4 = message.content.substring(5)
      
      if (te4 < 9) {

        message.channel.send('!검색 Zum 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttp://search.zum.com/search.zum?method=uni&option=accu&rd=1&qm=f_typing.top&query="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 Zum ')) {

      var text2 = message.content.split('!검색 Zum ');
      var te4 = message.content.substring(5)
      
      if (te4 < 9) {

        message.channel.send('!검색 Zum 검색 내용 과 같이 쳐 주세요.');

      }

      message.channel.send("검색 결과 입니다\nhttp://search.zum.com/search.zum?method=uni&option=accu&rd=1&qm=f_typing.top&query="+text2[1]+"");

    }

    if (message.content.startsWith('!검색 줌 ')) {

      var text2 = message.content.split('!검색 줌 ');
      var te4 = message.content.substring(3)
      
      if (te4 < 9) {

        message.channel.send('!검색 Zum 검색 내용 과 같이 쳐 주세요.');

      }
      
      message.channel.send("검색 결과 입니다\nhttp://search.zum.com/search.zum?method=uni&option=accu&rd=1&qm=f_typing.top&query="+text2[1]+"");

    }

});