import { Component } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {

  switchValue:number= 0;
  showHide:boolean = false
  description: string[] = [
    "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 105 tankōbon volumes as of March 2023",
    "Hunter x Hunter is a Japanese manga series written and illustrated by Yoshihiro Togashi. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 1998, although the manga has frequently gone on extended hiatuses since 2006.",
    "Sword Art Online is a Japanese light novel series written by Reki Kawahara and illustrated by abec. The series takes place in the then-near future and focuses on protagonists Kazuto 'Kirito' Kirigaya and Asuna Yuuki as they play through various virtual reality MMORPG worlds",
    "Re:Zero - Starting Life in Another World, often referred to simply as Re:Zero and also known as Re: Life in a different world from zero, is a Japanese light novel series written by Tappei Nagatsuki and illustrated by Shin'ichirō Ōtsuka.",
    "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans' safe zone. During the carnage that follows, soldier Eren Jaeger sees one of the creatures devour his mother, which leads him to vow that he will kill every Titan. He enlists some friends who survived to help him, and that group is humanity's last hope for avoiding extinction at the hands of the monsters."
  ];
  group1: Group[] = [{name:'Luffy'},{name:'Zoro'},{name:'Sanji'},{name:'Nami'},{name:'Ussop'},{name:'Chopper'},{name:'Robin'},{name:'Franky'},{name:'Brook'},{name:'Jimbie'},{name:'Yamato'}];
  group2: Group[] = [{name:'Gon'},{name:'killua'},{name:'Leorio'},{name:'Kurapika'},{name:'Hisoka'}];
  group3: Group[] = [{name:'Kirito'},{name:'Asuna'},{name:'Sinon'},{name:'Alice'},{name:'Leafa'},{name:'Klein'},{name:'Agil'}];
  group4: Group[] = [{name:'Subaru'},{name:'Emilia'},{name:'Rem'},{name:'Ram'},{name:'Beatrice'},{name:'Puck'},{name:'frederica'},{name:'Roswaal'},{name:'Garfiel'},{name:'Patrasche'}];
  group5: Group[] = [{name:'Eren'},{name:'Mikasa'},{name:'Armin'},{name:'Levi'},{name:'Jean'},{name:'Connie'},{name:'Reiner'},{name:'Annie'},{name:'Sasha'},{name:'Hunge'}];

  groupvalue:any = this.group1;
  des:string = this.description[0];

  onSelect($event:any) {
    const value = $event.target.value
    if(value == 1) {
      this.groupvalue = this.group1;
      this.des = this.description[0];
    } else if (value == 2) {
      this.groupvalue = this.group2;
      this.des = this.description[1];
    } else if (value == 3) {
      this.groupvalue = this.group3;
      this.des = this.description[2];
    } else if (value == 4) {
      this.groupvalue = this.group4;
      this.des = this.description[3];
    } else if (value == 5) {
      this.groupvalue = this.group5;
      this.des = this.description[4];
    }
  }

  onChange($event:any) {
    const value = $event.target.value;
    if (value == 0) {
      this.switchValue = 1;
      this.showHide = true;
    } else {
      this.switchValue = 0;
      this.showHide = false;
    }
    console.log(this.showHide); 
    console.log(this.switchValue);
  }
}

class Group {
  name: string | undefined;
}