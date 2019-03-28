const getTime = ()=>{
    const now = new Date();
    
    const hour = document.getElementById('hour');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const dayWords = document.getElementById('day-words');
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const meridian = document.getElementById('meridian');
    
    const days = ['sunday', 'monday', 'tueday', 'wednesday', 'thurday', 'friday', 'saturday'];
    const months = ['january', 'february','march','april', 'may','june','july','august','september','october','november','december'];


    // hour.textContent = now.getHours();
    minutes.textContent = now.getMinutes();
    seconds.textContent = now.getSeconds();
    dayWords.textContent = days[now.getDay()];
    month.textContent = months[now.getMonth()];
    year.textContent = now.getFullYear();
    day.textContent = now.getDate();

    if(now.getHours() > 12){
        hour.textContent = now.getHours() - 12;
        meridian.textContent = 'PM';
      }else{
          hour.textContent = now.getHours();
          meridian.textContent = 'AM';
      }
    
  }
 
  setInterval(getTime, 1000);
  