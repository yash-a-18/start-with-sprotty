/** @jsx svg */
import { svg } from 'sprotty/lib/lib/jsx';
import { injectable } from 'inversify';
import { VNode } from 'snabbdom';
import { IView, RenderingContext, SNode } from 'sprotty';
import { MessageNode, TaskNode } from './models';

@injectable()
export class TaskNodeView implements IView {
    render(node: Readonly<SNode & TaskNode>, context: RenderingContext): VNode {
        const position = 50;
        return <g>
            <ellipse class-sprotty-node={true} class-task={true}
                class-running={node.isRunning}
                class-finished={node.isFinished}
                cx={node.size.width / 2}
                cy={node.size.height / 2}
                rx={node.size.width / 2}
                ry={node.size.height / 3}
            >
            </ellipse>
            <text x={position} y={position + 5}>{node.name}</text>
        </g>;
    }
}

@injectable()
export class MessageNodeView implements IView {
    render(node: Readonly<SNode & MessageNode>, context: RenderingContext): VNode {
        const position = 25;
        return <g>
            <rect class-sprotty-node={true} class-message={true}
                class-messageType={node.messageType}
                width={node.size.width}
                height={node.size.height}
                rx="25"
                ry="25"
            >
            </rect>
            <text x={position+15} y={position + 5}>{node.message}</text>
        </g>;
    }
}