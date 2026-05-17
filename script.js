document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 11, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 11, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Timeline Expandable Items
    const timelineItems = document.querySelectorAll('.timeline-item.expandable');
    timelineItems.forEach(item => {
        const header = item.querySelector('.timeline-header');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Accordion for Frameworks
    const accordions = document.querySelectorAll('.accordion-item');
    accordions.forEach(acc => {
        const header = acc.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            accordions.forEach(other => {
                if (other !== acc) {
                    other.classList.remove('active');
                }
            });
            acc.classList.toggle('active');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = 72;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==========================================
// QUIZ INTERATIVO: ARENA DO PM
// ==========================================
const quizQuestions = [
    {
        question: "1. Qual é o principal papel do Product Manager?",
        options: [
            "A) Programar todas as funcionalidades",
            "B) Conectar usuário, negócio, tecnologia, dados e estratégia",
            "C) Criar apenas telas bonitas",
            "D) Aprovar férias do time"
        ],
        correct: 1
    },
    {
        question: "2. O que é Product Discovery?",
        options: [
            "A) Fase de investigar problemas e validar hipóteses",
            "B) Fase exclusiva de desenvolvimento de código",
            "C) Fase de contratação de pessoas",
            "D) Fase de apagar o backlog no Jira"
        ],
        correct: 0
    },
    {
        question: "3. Quando um PM deve usar o framework RICE?",
        options: [
            "A) Para escolher a cor de um botão na tela",
            "B) Para priorizar iniciativas avaliando Reach, Impact, Confidence e Effort",
            "C) Para medir a satisfação emocional do cliente",
            "D) Para organizar as cerimônias ágeis da semana"
        ],
        correct: 1
    },
    {
        question: "4. O que é a North Star Metric?",
        options: [
            "A) Uma métrica principal que representa o valor central entregue",
            "B) Uma lista de tarefas técnicas para a equipe",
            "C) Um tipo de reunião de retrospectiva",
            "D) Um bug crítico no banco de dados"
        ],
        correct: 0
    },
    {
        question: "5. O que o framework MoSCoW ajuda a definir?",
        options: [
            "A) Must Have, Should Have, Could Have e Won’t Have",
            "B) As métricas financeiras anuais da empresa",
            "C) A arquitetura em cloud do sistema",
            "D) Apenas o funil de marketing"
        ],
        correct: 0
    },
    {
        question: "6. O que significa Retenção em Analytics?",
        options: [
            "A) Usuários que continuam usando o produto ao longo do tempo",
            "B) Usuários que nunca acessaram o produto",
            "C) O total de bugs reportados em produção",
            "D) A quantidade de reuniões feitas na Sprint"
        ],
        correct: 0
    },
    {
        question: "7. O que envolve a fase de Go To Market (GTM)?",
        options: [
            "A) Estratégia de lançamento, comunicação, treinamento e adoção",
            "B) Escrever exclusivamente código backend",
            "C) Apenas aplicar testes de usabilidade",
            "D) Apenas a criação de um dashboard no Mixpanel"
        ],
        correct: 0
    },
    {
        question: "8. O que é 'Liderança sem Autoridade' para o PM?",
        options: [
            "A) Influenciar os times usando contexto, dados e alinhamento",
            "B) Mandar as pessoas fazerem sem explicar o motivo",
            "C) Ignorar stakeholders e seguir a própria intuição",
            "D) Decidir absolutamente tudo sozinho sem consultar engenharia"
        ],
        correct: 0
    },
    {
        question: "9. O que significa 'Cost of Delay' na priorização?",
        options: [
            "A) O custo ou perda financeira de atrasar uma iniciativa",
            "B) O custo cobrado pela agência de design",
            "C) O custo de realizar uma reunião de 1 hora",
            "D) O custo do onboarding interno de um novo PM"
        ],
        correct: 0
    },
    {
        question: "10. O que um PM de Alta Performance faz depois de um lançamento?",
        options: [
            "A) Mede os resultados, aprende com os dados e evolui o produto",
            "B) Esquece a funcionalidade e parte direto para a próxima",
            "C) Remove todas as métricas do dashboard",
            "D) Para imediatamente de falar com os usuários"
        ],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-question-container').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const qData = quizQuestions[currentQuestionIndex];
    document.getElementById('q-current').textContent = currentQuestionIndex + 1;
    document.getElementById('q-total').textContent = quizQuestions.length;
    document.getElementById('question-text').textContent = qData.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // clear previous
    
    qData.options.forEach((optText, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = optText;
        btn.onclick = () => selectAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex, btnElement) {
    // Disable all options
    const optionsContainer = document.getElementById('options-container');
    const allButtons = optionsContainer.querySelectorAll('button');
    allButtons.forEach(btn => btn.disabled = true);
    
    const correctIndex = quizQuestions[currentQuestionIndex].correct;
    
    if (selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        allButtons[correctIndex].classList.add('correct'); // Highlight the correct one
    }
    
    // Wait briefly then go to next question
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    document.getElementById('quiz-question-container').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    
    document.getElementById('result-score').textContent = `${score}/${quizQuestions.length}`;
    
    let message = '';
    if (score <= 3) {
        message = "Você está começando sua jornada. Continue explorando os conceitos da página.";
    } else if (score <= 6) {
        message = "Você já entende fundamentos importantes. Agora é hora de praticar com exemplos reais.";
    } else if (score <= 8) {
        message = "Você tem uma boa visão de Produto. Continue aprofundando estratégia, dados e priorização.";
    } else {
        message = "Mandou muito bem! Você pensa como um PM de alta performance.";
    }
    
    document.getElementById('result-message').textContent = message;
    
    // Refresh Icons for result
    lucide.createIcons();
}

function resetQuiz() {
    startQuiz();
}

// Expose to window so onclick works
window.startQuiz = startQuiz;
window.resetQuiz = resetQuiz;

// ==========================================
// FUNÇÕES DE DOWNLOAD DOS MODELOS (PLAYBOOK)
// ==========================================

function downloadImage(elementId, title) {
    const element = document.getElementById(elementId);
    
    // Configura fundo escuro e converte a div em canvas
    html2canvas(element, { 
        backgroundColor: '#19191c', 
        scale: 2 
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `Modelo_PM_${title.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

function downloadExcel(elementId, title) {
    const text = document.getElementById(elementId).innerText;
    
    // Monta uma tabela HTML estruturada, que o Excel interpreta como planilha nativa
    let table = `<table border="1" style="font-family: Arial, sans-serif;">`;
    table += `<tr><th style="background:#3b82f6; color:white; font-size:16px; padding:10px;" colspan="2">${title}</th></tr>`;
    table += `<tr><th style="background:#f3f4f6; width: 300px; padding:8px;">Tópico</th><th style="background:#f3f4f6; width: 500px; padding:8px;">Preenchimento</th></tr>`;
    
    // Divide o texto pelos números indicativos (ex: "1. ", "2. ")
    const parts = text.split(/(?=\n\d+\.\s)/g);
    
    parts.forEach(part => {
        if(part.trim() === '') return;
        const splitIndex = part.indexOf('\n');
        let question = part;
        let hint = "";
        
        if(splitIndex !== -1) {
            question = part.substring(0, splitIndex).trim();
            hint = part.substring(splitIndex).replace(/\n/g, '<br>').trim();
        }
        
        table += `<tr>
            <td style="vertical-align:top; font-weight:bold; padding:8px;">${question}</td>
            <td style="vertical-align:top; color:#666; padding:8px;">
                ${hint}<br><br><i style="color:#aaa;">[Escreva sua resposta aqui...]</i><br><br>
            </td>
        </tr>`;
    });
    table += `</table>`;
    
    // Envelopa com namespaces do excel para abrir corretamente .xls
    const html = `<html xmlns:x="urn:schemas-microsoft-com:office:excel">
    <head>
        <meta charset="utf-8">
        <!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Template</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
    </head>
    <body>${table}</body>
    </html>`;
    
    const blob = new Blob(['\ufeff', html], { type: 'application/vnd.ms-excel' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Modelo_PM_${title.replace(/\s+/g, '_')}.xls`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadWord(elementId, title) {
    const text = document.getElementById(elementId).innerText;
    
    // Monta documento estilizado no formato Six Pager
    let content = `<h1 style="font-family: Arial, sans-serif; color: #3b82f6; text-align: center; margin-bottom: 5px;">${title}</h1>`;
    content += `<p style="text-align: center; color: #666; font-family: Arial, sans-serif; margin-top: 0;">Documento Six Pager de Produto</p><hr style="border: 1px solid #ccc; margin-bottom: 30px;">`;
    
    const parts = text.split(/(?=\n\d+\.\s)/g);
    
    parts.forEach(part => {
        if(part.trim() === '') return;
        const splitIndex = part.indexOf('\n');
        let question = part;
        let hint = "";
        
        if(splitIndex !== -1) {
            question = part.substring(0, splitIndex).trim();
            hint = part.substring(splitIndex).replace(/\n/g, '<br>').trim();
        }
        
        content += `<h3 style="font-family: Arial, sans-serif; color: #222; margin-top: 24px; margin-bottom: 8px;">${question}</h3>`;
        if (hint) {
            content += `<p style="font-family: Arial, sans-serif; color: #666; font-size: 10pt; font-style: italic; margin-top: 0;">${hint}</p>`;
        }
        content += `<div style="font-family: Arial, sans-serif; font-size: 11pt; color: #888; margin-bottom: 40px; padding: 10px; border-left: 2px solid #ddd;">[ Escreva sua resposta detalhada aqui... ]</div>`;
    });
    
    // Envelopa com namespaces do word
    const html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${title}</title></head>
    <body style="padding: 20px;">${content}</body>
    </html>`;
    
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Modelo_PM_${title.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Expose download functions globally
window.downloadImage = downloadImage;
window.downloadExcel = downloadExcel;
window.downloadWord = downloadWord;
