document.addEventListener('DOMContentLoaded', function() {
    // Função para formatar moeda
    function formatCurrency(value) {
        return 'R$ ' + value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
    }

    // Função principal de cálculos
    function calculateTaxes() {
        console.log("Calculando impostos..."); // Debug
        
        // ISS
        const issValor = parseFloat(document.getElementById('iss-valor').value) || 0;
        const issAliquota = parseFloat(document.getElementById('iss-aliquota').value) || 0;
        const issResultado = (issValor * issAliquota) / 100;
        document.getElementById('iss-resultado').textContent = formatCurrency(issResultado);

        // ICMS
        const icmsValor = parseFloat(document.getElementById('icms-valor').value) || 0;
        const icmsAliquota = parseFloat(document.getElementById('icms-aliquota').value) || 0;
        const icmsResultado = (icmsValor * icmsAliquota) / 100;
        document.getElementById('icms-resultado').textContent = formatCurrency(icmsResultado);
        
        // ICMS Embutido
        const icmsEmbutido = (icmsValor / (1 - (icmsAliquota / 100))) - icmsValor;
        document.getElementById('icms-embutido').textContent = formatCurrency(icmsEmbutido);

        // IPI
        const ipiValor = parseFloat(document.getElementById('ipi-valor').value) || 0;
        const ipiAliquota = parseFloat(document.getElementById('ipi-aliquota').value) || 0;
        const ipiResultado = (ipiValor * ipiAliquota) / 100;
        document.getElementById('ipi-resultado').textContent = formatCurrency(ipiResultado);
    }

    // Event listeners para inputs
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', calculateTaxes);
    });

    // Seletor de Regime Tributário
    const regimeBtns = document.querySelectorAll('.regime-btn');
    regimeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            regimeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            calculateTaxes();
        });
    });

    // Inicializa cálculos
    calculateTaxes();
});