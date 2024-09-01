import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  
    faqItems = [
      {
        question: 'Lorem ipsum dolor sit amet consectetur',
        answer: 'Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas.',
        open: true
      },
      {
        question: 'Lorem ipsum dolor sit amet consectetur',
        answer: 'Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas.',
        open: false
      },
      {
        question: 'Lorem ipsum dolor sit amet consectetur',
        answer: 'Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas.',
        open: false
      }
    ];
  
    toggleFAQ(item: any) {
      item.open = !item.open;
    }
  }

