export default class AutoWrite {
  timeout: any;
  all_sentence: object[];
  output_element: any;
  iterationCount: number | string;
  current_sentence: string | any;
  output_sentence: string | any;
  removing_sentence: boolean | any;
  write_speed: number | any;
  remove_speed: number | any;
  wait_speed: number | any;
  current_speed: number | any;
  initial_index: number;
  current_index: number;
  round: number;
  hideExpand: boolean;
  hideStars: boolean;
  expand_div: HTMLDivElement;
  stars_div: HTMLDivElement | any;

  constructor(
    output_element,
    get_all_sentence,
    writeSpeed,   
    removeSpeed,
    waitSpeed,
    iterationCount,
    hideExpand,
    hideStars
  ) {
    this.all_sentence = get_all_sentence;
    this.output_element = output_element;
    this.iterationCount = iterationCount;
    this.current_sentence = '';
    this.output_sentence = '';
    this.removing_sentence = false;
    this.write_speed = writeSpeed || 110;
    this.remove_speed = removeSpeed || 50;
    this.wait_speed = waitSpeed || 1500;
    this.current_speed = 0;
    this.initial_index = 0;
    this.current_index = 0;
    this.round = 0;
    this.hideExpand = hideExpand;
    this.hideStars = hideStars;
  }

  writting() {
    this.output_sentence = this.current_sentence.substr(
      0,
      this.output_sentence.length + 1
    );
  }

  removing() {
    this.output_sentence = this.current_sentence.substr(
      0,
      this.output_sentence.length - 1
    );
  }

  typing() {
    this.current_index = this.initial_index % this.all_sentence.length;
    this.current_sentence = this.all_sentence[this.current_index];

    if (this.removing_sentence) {
      this.removing();
      this.current_speed = this.remove_speed;
    } else {
      this.writting();
      this.current_speed = this.write_speed;
    }
    if (this.output_sentence.length > 1) {
      this.output_element.parentElement.children.item(2).style.display =
        'unset';
    }

    if (this.output_sentence == this.current_sentence) {
      this.removing_sentence = true;
      this.current_speed = this.wait_speed;
      this.output_element.parentElement.children.item(2).style.display = 'none';

      setTimeout(() => {
        if (this.expand_div) {
          this.expand_div.animate(
            [
              {
                transform: 'scaleY(100%)',
              },

              {
                transform: 'scaleY(0%)',
              },
            ],
            {
              duration: 500,
              iterations: Math.pow(9, 999),
              direction: 'alternate',
            }
          );

          setTimeout(() => {
            this.expand_div.animate(
              [
                {
                  transform: 'scaleY(100%)',
                },

                {
                  transform: 'scaleY(100%)',
                },
              ],
              {
                duration: 1000,
                iterations: Math.pow(9, 999),
                direction: 'alternate',
              }
            );
          }, this.wait_speed - 250);
        }
      }, 50);
    } else if (this.output_sentence == '') {
      this.removing_sentence = false;
      this.initial_index++;
    }
    this.makeOutput();
    this.timeout = setTimeout(() => this.typing(), this.current_speed);
    this.clearTimeout();
  }

  makeOutput() {
    this.applyStyle();

    const make_outputs = this.output_sentence
      .split('')
      .map((c) => `<span class="typing_character">${c}</span>`);

    this.output_element.innerHTML =
      `<span style="padding:0.1px"></span>` + make_outputs.join('');
    if (this.output_element.parentElement.childElementCount < 2) {
      const expand_div: any = document.createElement('div');
      if (this.hideExpand) {
        expand_div.style.display = 'none';
      }
      expand_div.style.position = 'absolute';
      expand_div.style.top = 0;
      expand_div.style.transition = `all .8s`;
      expand_div.className = 'write_expand';
      expand_div.innerText = '|';
      this.expand_div = expand_div;
      this.output_element.parentElement.appendChild(expand_div);
      const stars_div = document.createElement('div');
      stars_div.className += 'all_stars';
      stars_div.style.position = 'absolute';
      stars_div.style.bottom = '102%';
      stars_div.style.fontSize = '5px';
      stars_div.style.width = '30px';
      stars_div.style.height = '30px';
      stars_div.style.display = 'none';
      stars_div.animate(
        [
          {
            opacity: '.9',
          },
          {
            opacity: '1',
          },
        ],
        {
          duration: 1000,
          iterations: Math.pow(9, 999),
          direction: 'alternate',
        }
      );

      this.stars_div = stars_div;
      if (this.hideStars) {
        stars_div.style.opacity = '0';
      } else {
        for (let i = 0; i < 25; i++) {
          stars_div.innerHTML += `<span class="stack_star">*</span>`;
        }
      }
      this.output_element.parentElement.appendChild(stars_div);
    }
    if (this.stars_div) {
      this.stars_div.style.left = this.output_element.clientWidth - 1 + 'px';
      this.expand_div.style.left = this.output_element.clientWidth + 1 + 'px';
    }

    // Animation
    const all_stack_star = document.querySelectorAll('.stack_star');
    all_stack_star.forEach((ele: HTMLElement, i) => {
      ele.style.position = 'absolute';
      ele.style.transition = 'all 1s';
      ele.style.top = Math.round(Math.random() * 30) + 'px';
      ele.style.right = Math.round(Math.random() * 30) + 'px';
    });
  }

  applyStyle() {
    this.output_element.parentElement.style.position = 'relative';
    this.output_element.style.display = 'inline-block';
  }

  clearTimeout() {
    if (
      this.all_sentence[this.all_sentence.length - 1] ==
        this.current_sentence &&
      this.current_sentence == this.output_sentence &&
      this.iterationCount
    ) {
      this.round++;
      if (this.round == this.iterationCount) {
        clearTimeout(this.timeout);
        this.expand_div.style.display = 'none';
      }
    }
  }
}
