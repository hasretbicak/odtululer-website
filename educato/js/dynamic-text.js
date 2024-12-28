// script.js
function createDynamicTextChanger(contentId, texts) {
    let currentIndex = 0;
    const dynamicTitleElement = document.getElementById(`dynamic-title-${contentId}`);
    const dynamicDescriptionElement = document.getElementById(`dynamic-description-${contentId}`);
    const cardContainer = document.getElementById(`content-${contentId}`);
    
    function changeText() {
      dynamicTitleElement.style.opacity = 0;
      dynamicDescriptionElement.style.opacity = 0; 
  
      // 1 saniye bekle, yazıları değiştir
      setTimeout(() => {
        dynamicTitleElement.textContent = texts[currentIndex].title;
        dynamicDescriptionElement.textContent = texts[currentIndex].description;
  
        // Renk değiştirme işlemi
        cardContainer.style.color = texts[currentIndex].color; 
  
        dynamicTitleElement.style.opacity = 1;
        dynamicDescriptionElement.style.opacity = 1;
  
        currentIndex = (currentIndex + 1) % texts.length; 
      }, 1000); 
    }
  
    changeText();
    setInterval(changeText, 3000); 
  }
  
  createDynamicTextChanger(1, [
    { 
      title: "Odtülüler ile YKS, LGS'ye Yapay Zeka ile Hazırlanın!", 
      description: "Yapay zeka desteğiyle, sınav hazırlığınızı en verimli şekilde yapın. Uzman eğitmenler tarafından oluşturulan özel içerikler ve kişiye özel çalışma planları ile başarıya ulaşın. Yapay zeka, eksiklerinizi tespit eder ve size en uygun çalışma stratejilerini sunarak sınavlarda yüksek performans göstermenizi sağlar.",
      color: "#fe8366" 
    },
    { 
      title: "Eksiksiz Başarı İçin, Her Soruyu Yeniden Çöz!", 
      description: "Her soruyu doğru çözerek başarıya bir adım daha yaklaşın. Eksiksiz çözüm yöntemleri ile her soruyu adım adım anlayarak öğrenin. Soruların çözümünü detaylı bir şekilde gözden geçirerek, sınavda yüksek başarıya ulaşmak için gereken tüm bilgiyi pekiştirin.",
      color: "#0c1c2d" 
    },
    { 
      title: "ODTÜLÜLER: Yenilikçi Eğitim, Güçlü Gelecek!", 
      description: "ODTÜLÜLER’in eğitim kalitesiyle daha parlak bir geleceğe adım atın. Yenilikçi eğitim yöntemleri ve uzman kadrosu ile geleceğinizi şekillendirin. Uzman eğitmenlerin rehberliğinde, akademik başarıyı hedefleyerek güçlü bir gelecek inşa edin.",
      color: "#fe8366" 
    },
    { 
      title: "Her Öğrenciye Özel, Her Başarıya Adım Adım!", 
      description: "Öğrencinin ihtiyacına göre, bireysel başarı için özel çözümler. Her öğrenciye özel çalışma planları ve rehberlik ile hedeflerinize ulaşın. Kişiye özel destekle, adım adım başarıya giden yolu birlikte keşfedin.",
      color: "#0c1c2d" 
    }
  ]);
   