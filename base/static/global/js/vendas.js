document.addEventListener('DOMContentLoaded', function() {
    // Função para formatar moeda
    function formatCurrency(value) {
      return 'R$ ' + value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
    }
  
    // Função para formatar porcentagem
    function formatPercent(value) {
      return value.toFixed(2).replace('.', ',') + '%';
    }
  
    // Função principal de cálculos
    function calculateAll() {
      // Receita Total
      const precoVenda = parseFloat(document.getElementById('preco-venda').value) || 0;
      const quantidadeVendida = parseFloat(document.getElementById('quantidade-vendida').value) || 0;
      const receitaTotal = precoVenda * quantidadeVendida;
      document.getElementById('receita-total').textContent = formatCurrency(receitaTotal);
  
      // Ticket Médio
      const receitaTotalTM = parseFloat(document.getElementById('receita-total-tm').value) || receitaTotal;
      const numeroVendas = parseFloat(document.getElementById('numero-vendas').value) || quantidadeVendida || 1;
      const ticketMedio = receitaTotalTM / numeroVendas;
      document.getElementById('ticket-medio').textContent = formatCurrency(ticketMedio);
  
      // Margem de Lucro
      const lucro = parseFloat(document.getElementById('lucro').value) || 0;
      const precoVendaML = parseFloat(document.getElementById('preco-venda-ml').value) || precoVenda || 1;
      const margemLucro = (lucro / precoVendaML) * 100;
      document.getElementById('margem-lucro').textContent = formatPercent(margemLucro);
  
      // Custo Variável Total
      const custoVarUnit = parseFloat(document.getElementById('custo-variavel-unit').value) || 0;
      const quantProduzida = parseFloat(document.getElementById('quantidade-produzida').value) || 0;
      const custoVarTotal = custoVarUnit * quantProduzida;
      document.getElementById('custo-variavel-total').textContent = formatCurrency(custoVarTotal);
  
      // Custo Fixo
      const custoFixo = parseFloat(document.getElementById('custo-fixo').value) || 0;
  
      // Custo Total
      const custoTotal = custoFixo + custoVarTotal;
      document.getElementById('custo-total').textContent = formatCurrency(custoTotal);
  
      // Preço de Venda com Margem
      const custoTotalPV = parseFloat(document.getElementById('custo-total-pv').value) || custoTotal;
      const margemDesejada = parseFloat(document.getElementById('margem-desejada').value) || 0;
      const precoVendaFinal = custoTotalPV * (1 + (margemDesejada / 100));
      document.getElementById('preco-venda-final').textContent = formatCurrency(precoVendaFinal);
    }
  
    // Event listeners para todos os inputs
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
      input.addEventListener('input', calculateAll);
    });
  
    // Botão Voltar ao Topo
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Inicializa cálculos
    calculateAll();
  });