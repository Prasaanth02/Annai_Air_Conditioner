document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.gallery-thumb').forEach(img=>{
    img.addEventListener('click', function(){
      const src = this.dataset.src;
      const overlay = document.createElement('div');
      overlay.style= 'position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:1000';
      const big = document.createElement('img');
      big.src = src;
      big.style = 'max-width:90%;max-height:90%;border-radius:8px';
      overlay.appendChild(big);
      overlay.addEventListener('click', ()=>overlay.remove());
      document.body.appendChild(overlay);
    });
  });
});