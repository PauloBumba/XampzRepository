
  $(document).ready(function() {
    // Função para adicionar uma nova avaliação
    function addReview(name, rating, comment, imageUrl) {
      var reviewsSection = $('.reviews');

      // Cria o elemento para a nova avaliação
      var reviewHtml = `
        <div class="review">
          <img src="${imageUrl}" alt="Imagem do Usuário">
          <div>
            <h3>${name}</h3>
            <p><strong>Avaliação:</strong> 
              <span class="user-rating">
                ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
              </span>
            </p>
            <p><strong>Comentário:</strong> ${comment}</p>
          </div>
        </div>
      `;

      // Adiciona a nova avaliação à seção de avaliações
      reviewsSection.append(reviewHtml);
    }

    // Função para salvar as avaliações no localStorage
    function saveReviews(reviews) {
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    // Função para carregar avaliações do localStorage
    function loadReviews() {
      var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.forEach(function(review) {
        addReview(review.name, review.rating, review.comment, review.imageUrl);
      });
    }

    // Manipulação do envio do formulário
    $('#feedback-form').on('submit', function(event) {
      event.preventDefault(); // Previne o envio do formulário padrão

      // Coleta os dados do formulário
      var name = $('#name').val();
      var email = $('#email').val();
      var rating = $('input[name="rating"]:checked').val();
      var comment = $('#comments').val();
      var image = $('#image')[0].files[0];

      // Cria um URL temporário para a imagem (se houver)
      var imageUrl = image ? URL.createObjectURL(image) : '';

      // Adiciona a nova avaliação
      addReview(name, rating, comment, imageUrl);

      // Salva a nova avaliação no localStorage
      var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.push({ name, rating, comment, imageUrl });
      saveReviews(reviews);

      // Limpa o formulário
      this.reset();

      // Exibe uma mensagem de sucesso ou realiza outras ações conforme necessário
      alert('Obrigado pelo seu feedback!');
    });

    // Carrega as avaliações ao iniciar
    loadReviews();
  });

