document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.activity-container').forEach(container => {
        initActivity(container);
    });

    function initActivity(container) {
        let selectedInput = null;
        let phrases = [];
        const wordBank = container.querySelector('.word-bank');

        // Função para embaralhar array
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        };

        // Atualiza banco de palavras
        const updateWordBank = () => {
            wordBank.innerHTML = phrases.map(phrase =>
                `<div class="word-item">${phrase}</div>`
            ).join('');
            initWordItems();
        };

        // Inicializa frases
        const initPhrases = () => {
            phrases = wordBank.dataset.words.split(';').map(p => p.trim());
            shuffleArray(phrases);
            updateWordBank();
        };

        // Atualiza palavras usadas
        const updateUsedWords = () => {
            const inputs = Array.from(container.querySelectorAll('.blank-input'));
            const usedValues = inputs.map(input => input.value.trim());

            wordBank.querySelectorAll('.word-item').forEach(word => {
                word.classList.toggle('used', usedValues.includes(word.textContent));
            });
        };

        // Inicializa eventos das palavras
        const initWordItems = () => {
            container.querySelectorAll('.word-item').forEach(phrase => {
                phrase.addEventListener('click', () => {
                    if (selectedInput && !phrase.classList.contains('used')) {
                        const currentInput = selectedInput;

                        // Remove estilo da palavra anterior
                        const previousWord = wordBank.querySelector(`.word-item[data-used-for="${currentInput.id}"]`);
                        if (previousWord) {
                            previousWord.removeAttribute('data-used-for');
                            previousWord.classList.remove('used');
                        }

                        // Atualiza input
                        currentInput.value = phrase.textContent;
                        currentInput.classList.remove('selected');

                        // Marca palavra como usada
                        phrase.setAttribute('data-used-for', currentInput.id);
                        phrase.classList.add('used');

                        // Atualiza próximo campo
                        const inputs = Array.from(container.querySelectorAll('.blank-input'));
                        const nextEmpty = inputs.find(input =>
                            input !== currentInput &&
                            input.value === '' &&
                            inputs.indexOf(input) > inputs.indexOf(currentInput)
                        );

                        if (nextEmpty) {
                            nextEmpty.classList.add('selected');
                            nextEmpty.focus();
                            selectedInput = nextEmpty;
                        } else if (inputs.every(input => input.value !== '')) {
                            container.querySelector('.check-btn').click();
                        } else {
                            selectedInput = null;
                        }

                        updateUsedWords();
                        checkSentence(currentInput);
                    }
                });
            });
        };

        // Seleção de inputs e feedback automático
        container.querySelectorAll('.blank-input').forEach((input, index) => {
            input.id = `input-${index}`;

            input.addEventListener('click', function () {
                container.querySelectorAll('.blank-input').forEach(i => {
                    i.classList.remove('selected');
                });
                this.classList.add('selected');
                selectedInput = this;
            });

            input.addEventListener('input', function () {
                updateUsedWords();
                checkSentence(this);
            });
        });

        // Verificação de cada sentença
        const checkSentence = (inputElement) => {
            const sentence = inputElement.closest('p');
            const inputs = sentence.querySelectorAll('.blank-input');
            let allFilled = true;
            let allCorrect = true;

            inputs.forEach(input => {
                const userValue = input.value.trim();
                const correctValue = input.dataset.answer;

                if (userValue === '') {
                    allFilled = false;
                } else if (userValue !== correctValue) {
                    allCorrect = false;
                }
            });

            // Remove feedback anterior
            let feedbackEl = sentence.querySelector('.inline-feedback');
            if (feedbackEl) feedbackEl.remove();

            if (allFilled) {
                const span = document.createElement('span');
                span.className = 'inline-feedback';
                span.style.marginLeft = '10px';
                span.innerHTML = allCorrect
                    ? '<span class="text-success">✔️ Correto!</span>'
                    : '<span class="text-danger">❌ Tente novamente!</span>';
                sentence.appendChild(span);
            }
        };

        // Verificação final (botão)
        container.querySelector('.check-btn').addEventListener('click', () => {
            let allCorrect = true;
            const feedback = container.querySelector('.feedback');

            container.querySelectorAll('.blank-input').forEach(input => {
                const correctAnswer = input.dataset.answer;

                if (input.value.trim() === correctAnswer) {
                    input.classList.add('correct');
                    input.classList.remove('incorrect');
                } else {
                    input.classList.add('incorrect');
                    input.classList.remove('correct');
                    allCorrect = false;
                }

                input.disabled = true;
            });

            feedback.innerHTML = allCorrect ?
                '<div class="alert alert-success">Você completou as frases corretamente e demonstrou um ótimo domínio do vocabulário relacionado ao secretariado. Esse conhecimento é essencial para interações profissionais e comunicação eficaz no ambiente de trabalho. Continue aprimorando seus estudos! 🎉</div>' :
                '<div class="alert alert-danger">As frases não foram todas completadas corretamente. Revise o vocabulário e tente novamente. Com a prática, você poderá aprimorar seus conhecimentos! </div>';
        });

        // Reinicia atividade
        container.querySelector('.reset-btn').addEventListener('click', () => {
            container.querySelectorAll('.blank-input').forEach(input => {
                input.value = '';
                input.classList.remove('correct', 'incorrect', 'selected');
                input.disabled = false;
            });

            wordBank.querySelectorAll('.word-item').forEach(word => {
                word.classList.remove('used');
                word.removeAttribute('data-used-for');
            });

            container.querySelectorAll('.inline-feedback').forEach(f => f.remove());
            container.querySelector('.feedback').innerHTML = '';
            selectedInput = null;
            initPhrases();
        });

        initPhrases();
    }
});
