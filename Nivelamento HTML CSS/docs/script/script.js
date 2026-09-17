/* ==========================================================================
   AGUARDAR CARREGAMENTO DA DOM E CAPTURAR ELEMENTOS
   ========================================================================== */

// Garantimos que o código só rode após a estrutura do HTML estar pronta
document.addEventListener("DOMContentLoaded", () => {
    
    // Selecionamos os inputs do formulário utilizando seus IDs únicos
    const inputCpf = document.getElementById("cpf");
    const inputTelefone = document.getElementById("telefone");

    /* ==========================================================================
       LÓGICA DA MÁSCARA DE CPF (Formato: 000.000.000-00)
       ========================================================================== */
    if (inputCpf) {
        inputCpf.addEventListener("input", (e) => {
            // 1. Captura o valor atual digitado pelo usuário
            let valor = e.target.value;

            // 2. Remove TUDO o que não for número (substitui qualquer caractere não-numérico por vazio)
            // O padrão \D significa "tudo que é diferente de dígito"
            valor = valor.replace(/\D/g, "");

            // 3. Garante o limite máximo de 11 dígitos para o CPF
            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            // 4. Aplica a formatação em etapas baseado na quantidade de números digitados
            // Ex: 123456 -> 123.456
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            
            // Ex: 123.456789 -> 123.456.789
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            
            // Ex: 123.456.78901 -> 123.456.789-01
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            // 5. Devolve o valor formatado de volta para a tela do usuário
            e.target.value = valor;
        });
    }

    /* ==========================================================================
       LÓGICA DA MÁSCARA DE TELEFONE (Formato Dinâmico: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX)
       ========================================================================== */
    if (inputTelefone) {
        inputTelefone.addEventListener("input", (e) => {
            let valor = e.target.value;

            // Remove qualquer caractere que não seja número
            valor = valor.replace(/\D/g, "");

            // Limita a digitação ao máximo de 11 números (DDD + 9 dígitos)
            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            // Formatação do DDD: adiciona os parênteses ao redor dos 2 primeiros dígitos
            valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

            // Formatação do corpo do número:
            // Caso 1: Se tiver 11 dígitos, é celular (Formato: (XX) XXXXX-XXXX)
            if (valor.replace(/\D/g, "").length === 11) {
                valor = valor.replace(/(\s\d{5})(\d)/, "$1-$2");
            } 
            // Caso 2: Se tiver até 10 dígitos, trata como fixo (Formato: (XX) XXXX-XXXX)
            else {
                valor = valor.replace(/(\s\d{4})(\d)/, "$1-$2");
            }

            // Atualiza o input com a máscara em tempo real
            e.target.value = valor;
        });
    }
});
