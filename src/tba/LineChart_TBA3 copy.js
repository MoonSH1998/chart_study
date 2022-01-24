class LineChart extends Component {

      wrapper = React.createRef();

      componentDidMount() {
        const { dataSets } = this.props

        let svg = d3.select("body svg.mySvg"),
          margin = {top: 20, right: 20, bottom: 30, left: 40},
          width = +svg.attr("width") - margin.left - margin.right,
          height = +svg.attr("height") - margin.top - margin.bottom;

        const bisectDate = d3.bisector(function(d) { return d.year; }).left;

        const x = d3.scaleTime().range([0, width]);
        const y = d3.scaleLinear().range([height, 0]);

        const line = d3.line()
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y(d.value); });

        let g = svg.append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        x.domain(d3.extent(dataSets.jitter, function(d) { return d.year; }));
        y.domain([0, d3.max(dataSets.jitter, function(d) { return d.value; })]);

        g.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + height + ")")
          .style("color", "#fff")
          .call(d3.axisBottom(x).ticks(3))
          .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".3em")
            .attr("transform", "rotate(-45)");

        g.append("g")
          .attr("class", "axis axis--y")
          .style("color", "#fff")
          .call(d3.axisLeft(y).ticks(7).tickFormat(function(d) { return d; }));

        [dataSets.jitter, dataSets.latency].forEach((data, index) => {

          g.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);

          let focus = g.append("g")
            .attr("class", `focus focus-${index}`)
            .style("display", "none");

          focus.append("line")
            .attr("class", "y-hover-line hover-line")
            .attr("x1", width)
            .attr("x2", width);

          focus.append("circle")
            .attr("r", 7.5);

          focus.append("text")
            .attr("class", `text text-${index}`)
            .style("color", "#fff")
            .attr("x", 15)
            .attr("dy", ".31em");

          svg.append('rect')
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .attr("class", `overlay overlay-${index}`)
            .attr("width", width)
            .attr("height", height)
            .on("mouseover", function() { focus.style("display", null); })
            .on("mouseout", function() { focus.style("display", "none"); })
            .on("mousemove", function() {
              var x0 = x.invert(d3.mouse(this)[0]),
                  i = bisectDate(data, x0, 1),
                  d0 = data[i - 1],
                  d1 = data[i],
                  d = x0 - d0.year > d1.year - x0 ? d1 : d0;
              focus.attr("transform", "translate(" + x(d.year) + "," + y(d.value) + ")");
              focus.select(`text.text-${index}`)
                .style("color", "#fff")
                .style("stroke", "#fff")
                .text(function() { return d.value; });
            });
        }) 
      }

      render() {
        const { width, height } = this.props
        return  (
            <svg
              ref={ this.wrapper }
              height={ height }
              width={ width }
              className="mySvg"
            ></svg>
        )
      }
    }