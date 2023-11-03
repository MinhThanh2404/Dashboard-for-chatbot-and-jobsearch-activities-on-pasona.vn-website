<template>
    <div ref="wordcloud"></div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  import 'd3-cloud';
  
  export default {
    mounted() {
      // Generate word cloud data
      const words = [
        { text: 'example', size: 20 },
        { text: 'word', size: 16 },
        // Add more words and their corresponding sizes
      ];
  
      const layout = d3.layout.cloud()
        .size([800, 400])
        .words(words)
        .padding(5)
        .rotate(() => (Math.random() * 2) * 90) // Random rotation
        .fontSize(d => d.size)
        .on('end', this.draw);
  
      layout.start();
    },
    methods: {
      draw(words) {
        d3.select(this.$refs.wordcloud)
          .append('svg')
          .attr('width', 800)
          .attr('height', 400)
          .append('g')
          .attr('transform', 'translate(400,200)')
          .selectAll('text')
          .data(words)
          .enter().append('text')
          .style('font-size', d => `${d.size}px`)
          .style('fill', 'blue') // Customize the text color
          .attr('text-anchor', 'middle')
          .attr('transform', d => `translate(${d.x},${d.y})rotate(${d.rotate})`)
          .text(d => d.text);
      }
    }
  }
  </script>
  
  <style scoped>
    /* Add any custom CSS styling here */
  </style>
  