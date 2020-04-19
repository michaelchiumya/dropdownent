import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

 configUrl = "/api/artist";
 headers = new HttpHeaders()
     .set('content-type','application/json')
      .set('Access-Control-Allow-Origin', '*');


  constructor(private http: HttpClient) { }

  postArtist(data : any){
     this.http.post<any>(this.configUrl, data, {'headers': this.headers}).subscribe((er)=>{console.log(er)});
  }

  getArtistByIdBlock(id: number): any {

     let data = this.getArtistsBlock();
     return data.find(d => d.id === id );
  }

  getArtist(): any{
    return [
      {
        name: 'PQ',
        biography: "PQ (real name is Pyken Mkwate) is a Malawian reggae/dancehall singer based in Lilongwe.He realized his musical talent at a tender age before recording songs in the studio. In 2012 he released his first solo reggae song titled Why on Tropical Escape Riddim (Chimney).Tema Tema and Dekha are the two mixtapes to his name with the former released in 2012 and the latter in 2014 under Drop Down Entertainment.",
        cover: '/assets/img/ns.jpg'
      }
    ];
  }

  getArtistsBlock(): any{
    return [
      {
        id:1,
        name: 'PQ',
        cover: "/assets/profiles/PQ.jpg",
        biography: "PQ whose real name is Pyken Mkwate was born in Zomba, Malawi. PQ is an artiste who performs different types of music, mostly Reggae and Dancehall. He realized his musical talent at a tender age before recording songs in the studio. In 2012 he released his first solo reggae song titled “Why” on Tropical Escape Riddim (Chimney). “Tema Tema” and “Dekha” are the two mixtapes to his name with the former released in 2012 and the latter in 2014 under Drop Down Entertainment. PQ claims to have been influenced by reggae and dancehall icons from his childhood days like the likes of Buju Banton, Bounty Killer, Beenie Man, Assassin (Agent Sasco) Mad Anju, Sizzla, Capleton, Kiprich, General Degree just to mention a few. On the local scene, he grew up admiring his mentors such as DAST Crew (Dr Lizard, Anne Matumbi San B and Tear Gas), Mad Character Crew as well as the Late Vic Marley. In 2017 PQ released songs such as Sindidzakula (f.t Martse & Krazie G), Girl I Swear (with Feyos on Bae Riddim) Give Thanks for Life (F.t Malinga) and Up Town Girl (f.t Blasto). All these singles were released under Drop Down Entertainment and are featured in his recent released album called “NEW SETTINGS”. PQ has managed to work with artist such as Blaze, Bingolingo, Blasto, Malinga Mafia, Ace Dirty, BFB, Feyos, Don Wargone, Flavio, Binge, Star Marley, Ancient Kush, Baska Baska (Zambia), Krummy (Zambia) and many more."
      },
      {
        id:2,
        name: 'Feyo',
        cover: "/assets/profiles/FEYOS.jpeg",
        biography: "Alfeyo Mhone better known by the stage name FEYOS is a Malawian Reggae/Dancehall Afro artist based in Lilongwe.The Drop Down Entertainment artist has a unique and versatile style, ready to surprise the masses. FEYOS has currently worked with his label mates such the late Don Wargone, Bingolingo and PQ. When asked about his interest in the music industry, FEYOS replied I always have had an interest of showcasing my musical talent.I always listen and sing along to the local and international music especially R&B, Reggae, Afro-Pop and Dancehall. I am working hard day every day to improve my vocals and I am learning a lot of things from my mates, who are encouraging me every time”. I feel music describes who FEYOS is and if people understand what’s in my music,they will know what music is all about. There are a lot of artists in Malawi who make me feel music is a language that communicates,teaches and heals and that is what I want to influence as well.Feyos has been featured in the recent released Album by PQ called NEW SETTINGS on songs such as; Pretty Lady, Hold Yah, Girl I Swear, Come Back and Undimvetsetse. Oh yeah the “Run Up” cover is the first solo track from the sing jay.Feyos is currently working on his solo project (EP) which hall be ready for release later this year. "
      },
      {
        id:3,
        name: 'Bingolingo',
        cover: '/assets/profiles/bingolingo.jpg',
        biography: "Bingolingo whose real name is Bright Mhango was born in Dedza, Malawi. Bingolingo is an artist who performs numerous genres, mostly Afrofusion, Reggae and Dancehall. He recognized his musical ability at a tender age through his brother Ish Dapalapa before recording songs in the studio. Bingolingo dropped his first solo track called ‘Bola Hule’ on a riddim produced by Cuff B (Big Vision Entertainment) which became an instant hit in Malawi and gained multiple airplays in many local radio stations and events. He later on linked up with the area 25 based producer Wanangwa Phiri popularly known as Warge (Warge records) and recorded couple of songs on his series of riddims like Sin City Riddim, Itchoke Itchoke Riddim which featured big artists like the late King Shaka aka Mafunyeta. In 2015 Bingolingo won his first Malawi Music Award for the best new artist in an event that saw other artists like Lawi, Tay Grin and Dan Lu scooping other accolades. Bingolingo entitles his talent to have been influenced by reggae and dancehall icons such as Buju Banton, Sizzla, Anthony B, Jah Cure, Romain Virgo, Capleton, Chronixx, Fantan Mojah and many other legends. On the local scene, he grew up admiring his brother Ish Dapalapa and Wambali Mkandawire. Bingolingo has managed to work with artist such as Blaze, Malinga Mafia, Ace Dirty, Macelba, Episods, Mwanache, Gibo Lantos, PQ and many more."
      },
      {
        id:4,
        name: 'Don Wagon',
        cover: '/assets/img/dwt.jpg',
        biography:"no bio yet"
      }
    ];
  }

}
