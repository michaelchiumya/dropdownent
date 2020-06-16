import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Video } from 'src/app/interface/video';
import { VideosService } from 'src/app/services/videos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {

  videoUpdateForm : FormGroup;
  videoCoverForm : FormGroup;
  videoActiveForm : FormGroup;
  update: any;
  noUpdate: any;
  activeError: any;
  activeSuccess :any;

  videos = new Video;
  id :any;

  constructor(
    private fb :FormBuilder,
    private videoService : VideosService,
    private route:  ActivatedRoute
  ) {}

  ngOnInit(): void
  {
    this.videoUpdateForm =  this.fb.group({
      title: ['', [Validators.required]],
      link: ['', [Validators.required]]
    });

    this.videoCoverForm =  this.fb.group({
      file: ['', [Validators.required]],
    });

    this.videoActiveForm =  this.fb.group({
      active: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.paramMap.get('id');

    this.loadVideos();
  }

 loadVideos()
 {
  this.videoService.getVideo(this.id).subscribe((data)=>{
    this.videos = data;
  })
 }

UpdateVideoSubmit(){
  if(this.videoUpdateForm.valid)
     {
      this.videoService.updateVideo(this.videoUpdateForm.value, this.id).subscribe(
        (data)=>{this.update = data},
        (error)=>{this.noUpdate = error}
      );
    }
 }

 activateVideoSubmit(){
  if(this.videoActiveForm.valid)
     {
      this.videoService.activateVideo(this.videoActiveForm.value, this.id).subscribe(
        (data)=>{this.activeSuccess = data},
        (error)=>{this.activeError = error}
      );
    }
 }

onVideoCoverSelect(event)
 {
   if(event.target.files.length > 0)
   {
     const file = event.target.files[0];
     this.videoCoverForm.patchValue({
       file : file
     });
   }
 }



}
