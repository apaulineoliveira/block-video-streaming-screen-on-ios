function getDayOfWeek(dayIndex) {
    const daysOfWeek = [
      'domingo', 'segunda-feira', 'terça-feira',
      'quarta-feira', 'quinta-feira', 'sexta-feira',
      'sábado'
    ];
    return daysOfWeek[dayIndex];
  }
  

  function formatDateAndTime() {
    const now = new Date();    
    const dayOfWeek = getDayOfWeek(now.getDay());
    const day = now.getDate();
    const month = now.toLocaleString('pt-BR', { month: 'long' });
    const year = now.getFullYear();
    const formattedDate = `${dayOfWeek}, ${day} de ${month} de ${year}`;
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = formattedTime;
  }
  
  function getTimeUntilNextMinute() {
    const now = new Date();
    const millisecondsUntilNextMinute = (60 - now.getSeconds()) * 1000;
    return millisecondsUntilNextMinute;
  }

  function initializeDateTime() {
    formatDateAndTime(); 

    const timeUntilNextMinute = getTimeUntilNextMinute();    
    setTimeout(function() {
      formatDateAndTime();
      setInterval(formatDateAndTime, 60000); 
    }, timeUntilNextMinute);
  }
  
  initializeDateTime();
  