var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var COL_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var INFO__HEIGHT = 60;
var BASE_COL_OFFSET_X = CLOUD_X + 50;
var BASE_COL_OFFSET_Y = CLOUD_Y + 90;
var BASE_TIME_OFFSET_Y = CLOUD_Y + 70;

var renderCloud = function(ctx, x, y) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x + GAP, y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#fff';
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y
  );

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', CLOUD_X + 20, CLOUD_Y + 20);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 40);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = times[i] / maxTime * BAR_HEIGHT;
    var offsetLeft = BASE_COL_OFFSET_X + (BAR_WIDTH + COL_GAP) * i;

    if (players[i] === 'Вы') {
      ctx.fillStyle = '#f00';
    } else {
      ctx.fillStyle = 'hsl(226,' + Math.random() * 100 + '%, 31%)';
    }

    ctx.fillRect(
      offsetLeft,
      BASE_COL_OFFSET_Y + (BAR_HEIGHT - barHeight),
      BAR_WIDTH,
      barHeight
    );

    ctx.fillStyle = '#000';

    ctx.fillText(
      players[i],
      offsetLeft,
      BASE_COL_OFFSET_Y + BAR_HEIGHT + GAP
    );

    ctx.fillText(
      Math.round(times[i]),
      offsetLeft,
      BASE_TIME_OFFSET_Y + (BAR_HEIGHT - barHeight)
    );
  };
};
