import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import treeData from '../treeData.json';

const TreeComponent = () => {
    let i = 0;
    const svgRef = useRef(null);
    const width = 500;
    const height = 500;
    const margin = { top: 10, right: 120, bottom: 10, left: 40 };

    function toggleChildren(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else if (d._children) {
            d.children = d._children;
            d._children = null;
        }
        return d;
    }

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        const root = d3.hierarchy(treeData);
        const treeLayout = d3.tree().size([height, width - 160]);

        const update = (source) => {
            treeLayout(root);
        
            const nodes = root.descendants();
            const links = root.links();
        
            // -- Nodes --
            const node = svg.selectAll('g.node')
                .data(nodes, d => d.id || (d.id = ++i));
        
            // Exiting nodes
            node.exit().transition()
                .duration(500)
                .attr('transform', d => `translate(${source.y},${source.x})`)
                .remove();
        
            // New nodes
            const nodeEnter = node.enter()
                .append('g')
                .attr('class', 'node')
                .attr('transform', d => `translate(${source.y0},${source.x0})`) 
                .on('click', (event, d) => {
                    d = toggleChildren(d);
                    update(d);
                });
        
            nodeEnter.append('circle')
                .attr('r', 5)
                .style('fill', 'white')
                .style('stroke', 'black');
        
            nodeEnter.append('text')
                .attr('dy', '.35em')
                .attr('x', d => d.children || d._children ? -13 : 13)
                .attr('text-anchor', d => d.children || d._children ? 'end' : 'start')
                .style('font-size', '12px')
                .style('font-family', 'Arial')
                .text(d => d.data.name);
        
            // Update existing nodes
            const nodeUpdate = nodeEnter.merge(node);
            nodeUpdate.transition()
                .duration(500)
                .attr('transform', d => `translate(${d.y},${d.x})`);
        
            // -- Links --
            const link = svg.selectAll('path.link')
                .data(links, d => d.target.id);
        
            // Exiting links
            link.exit().transition()
                .duration(500)
                .attr('d', d => {
                    const o = {x: source.x, y: source.y};
                    return d3.linkHorizontal()
                        .x(d => d.y)
                        .y(d => d.x)
                        ({source: o, target: o});
                })
                .remove();
        
            // New links
            link.enter()
                .insert('path', 'g')
                .attr('class', 'link')
                .attr('d', d => {
                    const o = {x: source.x0, y: source.y0};
                    return d3.linkHorizontal()
                        .x(d => d.y)
                        .y(d => d.x)
                        ({source: o, target: o});
                })
                .transition()
                .duration(500)
                .attr('d', d3.linkHorizontal()
                    .x(d => d.y)
                    .y(d => d.x))
                .style('stroke', 'black')
                .style('stroke-width', '1.5px')
                .style('fill', 'none');
        
            // Update existing links
            link.transition()
                .duration(500)
                .attr('d', d3.linkHorizontal()
                    .x(d => d.y)
                    .y(d => d.x));
        }
        

        update(root);
    }, []);

    return (
        <svg ref={svgRef}></svg>
    );
};

export default TreeComponent;
