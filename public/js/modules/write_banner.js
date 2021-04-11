export default class WriteBanner {
  constructor() {
    this.count = 0;
    this.text = 'Welcome to my portfolio!';
    this.speed = 250;
  }

  write() {
    if (this.count < this.text.length) {
      document.getElementById("banner").textContent += this.text.charAt(this.count);
      this.count++;
      setTimeout(this.write.bind(this), this.speed);
    } 
  }
}