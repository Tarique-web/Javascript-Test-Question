var count = 0;
function cc(card) {
    if (card > 1 && card <= 6) {
        count++;
    } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count--;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}
console.log(cc(2), cc(3), cc(4), cc('K'), cc('A')
);