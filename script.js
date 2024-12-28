// script.js

function generateRoutine() {
  const skinType = document.getElementById('skinType').value;
  const skinConcerns = document.getElementById('skinConcerns').value;
  let routine = '';

  // Cilt tipi ve sorunlarına göre öneri oluşturma
  if (skinType === 'kuru') {
    routine += '<p><strong>Sabah:</strong> Nemlendirici yüz temizleyici ve hyaluronik asit serum.</p>';
    routine += '<p><strong>Akşam:</strong> Nemlendirici gece kremi ve yoğun nemlendirici.</p>';
  } else if (skinType === 'yağlı') {
    routine += '<p><strong>Sabah:</strong> Hafif, matlaştırıcı temizleyici ve salisilik asit içeren tonik.</p>';
    routine += '<p><strong>Akşam:</strong> Derinlemesine temizleme ve akne tedavisi için salisilik asit serum.</p>';
  } else if (skinType === 'karma') {
    routine += '<p><strong>Sabah:</strong> Dengeleyici temizleyici ve hafif nemlendirici.</p>';
    routine += '<p><strong>Akşam:</strong> Nemlendirici gece kremi ve peeling.</p>';
  } else if (skinType === 'normal') {
    routine += '<p><strong>Sabah:</strong> Yüz temizleyici ve nemlendirici.</p>';
    routine += '<p><strong>Akşam:</strong> Gece kremi ve göz altı serumu.</p>';
  } else if (skinType === 'hassas') {
    routine += '<p><strong>Sabah:</strong> Yatıştırıcı temizleyici ve nemlendirici.</p>';
    routine += '<p><strong>Akşam:</strong> Yatıştırıcı gece kremi ve anti-kızarıklık serumu.</p>';
  }

  if (skinConcerns === 'akne') {
    routine += '<p><strong>Özel Ürün Önerisi:</strong> Akne için salisilik asit içeren serum ve tonik.</p>';
  } else if (skinConcerns === 'kuru') {
    routine += '<p><strong>Özel Ürün Önerisi:</strong> Yoğun nemlendirici ve hyaluronik asit.</p>';
  } else if (skinConcerns === 'gözenek') {
    routine += '<p><strong>Özel Ürün Önerisi:</strong> Gözenek sıkılaştırıcı tonik ve maskeler.</p>';
  } else if (skinConcerns === 'kırışıklık') {
    routine += '<p><strong>Özel Ürün Önerisi:</strong> Retinol içeren gece kremi ve serum.</p>';
  } else if (skinConcerns === 'lekeler') {
    routine += '<p><strong>Özel Ürün Önerisi:</strong> C vitamini serumu ve leke karşıtı ürünler.</p>';
  }

  // Sonuçları gösterme
  document.getElementById('routineDetails').innerHTML = routine;
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
}
