import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'chat-application',
  standalone: false,
  templateUrl: './chat-application.html',
  styleUrl: './chat-application.css',
})
export class ChatApplication {
  chatArray: string[] = [];
  @ViewChild('inputRef', { static: false }) inputValue!: ElementRef;
  @ViewChild('chatBoxRef', { static: false }) chatBox!: ElementRef;

  onSend() {
    const input = this.inputValue.nativeElement.value;
    console.log('input', input);
    if (input) {
      this.chatArray.push(input);
    }
  }
  ngAfterViewChecked() {
    console.log('this.chatbox', this.chatBox);
    if (this.chatBox) {
      this.scrollToBottom();
    }
  }
  private scrollToBottom() {
    try {
      const chatElement = this.chatBox.nativeElement;
      chatElement.scrollTop = chatElement.scrollHeight;
    } catch (err) {
      console.error('There still time for scroll to happen');
    }
  }
}
