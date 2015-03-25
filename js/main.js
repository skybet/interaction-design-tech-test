function renderBets($container, $template, bets) {
    $container.html('');
    bets.forEach(function (bet) {
        var $bet = $template.clone();
        $bet.data(bet);
        $bet.find('.bet__event').text(bet.event);
        $bet.find('.bet__name').text(bet.name);
        $bet.find('.bet__odds').text(formatOdds(bet.odds)).data('odds', bet.odds);

        $container.append($bet);
    });
}

function renderSelection($container, $selection) {
    var id = 'selection-' + $selection.data('bet_id');
    var sel = $selection.data();
    $selection.attr('id', id);
    $selection.find('.selection__title').text(
        sel.event + ' - ' + sel.name
    );
    $selection.find('.selection__returns').text('@ ' +
                                                formatOdds(sel.odds) +
                                                ' could return £' +
                                                formatReturns(sel.odds, 0));

    $container.append($selection);
}

function renderReceipt($container, $receipt) {
    var data = $receipt.data();
    //this would be a nice use case for variable destructuring in ES6
    var id = 'receipt-' + data.bet_id;
    $receipt.attr('id', id);

    $receipt.find('.receipt__title').text(
        data.event + ' - ' + data.name
    );
    $receipt.find('.receipt__stake').text('£' +
                                          data.stake +
                                          ' @ ' +
                                          formatOdds(data.odds) +
                                          ' could return £' +
                                          formatReturns(data.odds, data.stake));
    $receipt.find('.receipt__transaction-id').text(data.transaction_id);
    $container.append($receipt);
}

function removeSelection(selectionId) {
    $('#selection-' + selectionId).remove();
}

function formatOdds(odds) {
    return odds.numerator === odds.denominator ? 'Evens' : odds.numerator + '/' + odds.denominator;
}

function formatReturns(odds, stake) {
    var nil = 0;
    return stake > 0 ? ((1 + (odds.numerator / odds.denominator)) * stake).toFixed(2) : nil.toFixed(2);
}

function betLoadError(error) {
    console.error(error);
}

var templates = ["bet", "selection", "receipt"];
var $templates = {};
var betslip = [];
var $bets = $('#bets'), $selections = $('#selections'), $receipts = $('#receipts');
var $app = $('body');

templates.forEach(function (template) {
    $templates[template] = $($('#' + template).html());
});

$.get('http://skybettechtestapi.herokuapp.com/available')
    .done(renderBets.bind(this, $bets, $templates['bet']))
    .fail(betLoadError);

/**
 * @todo Think about how the betslip show behave when selections are added and removed
 */
$app.on('click', '.js-odds', function () {
    var $bet = $(this).parent('.bet');
    var betId = $bet.data('bet_id');

    if (betslip.indexOf(betId) === -1) {
        var $selection = $templates['selection'].clone();
        $selection.data($bet.data());

        renderSelection($selections, $selection);
        betslip.push(betId);
    } else {
        removeSelection(betId);
        betslip.splice(betslip.indexOf(betId), 1);
    }
});

$app.on('submit', '.js-selection', function (e) {
    e.preventDefault();
    var $selection = $(this);

    var stake = $selection.find('.js-stake').val();
    var $button = $selection.find('.js-place-bet');

    if (stake > 0) {
        var data = $.extend($selection.data(), {stake: stake});

        $button.attr('disabled', true);

        $.ajax({
            url: 'http://skybettechtestapi.herokuapp.com/bets',
            method: 'post',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json'
        }).done(
            function (data) {
                //remove bet from selections and add to the receipts
                removeSelection(data.bet_id);
                var $receipt = $templates['receipt'].clone();
                $receipt.data(data);
                renderReceipt($receipts, $receipt);
            }
        ).fail(function (e) {
                //@todo show error message returned from the server
                $selection.addClass('is-invalid');
                console.error(e);
            }
        );
    } else {
        $selection.addClass('is-invalid');
    }
});

$app.on('keyup', '.js-stake', function () {
    var $selection = $(this).closest('.js-selection');
    var sel = $selection.data();

    var stake = parseFloat($(this).val());
    if (stake > 0) {
        $selection.find('.js-place-bet').attr('disabled', false);
    } else {
        $selection.find('.js-place-bet').attr('disabled', true);
    }
    $selection.find('.js-returns').html('@ ' +
                                        formatOdds(sel.odds) +
                                        ' could return £' +
                                        formatReturns(sel.odds, stake));
});

$app.on('click', '.js-toggle', function (e) {
    e.preventDefault();
    $(this).parent().find('.js-toggle-target').toggleClass('is-hidden');
});
