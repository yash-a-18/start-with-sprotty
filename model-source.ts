import { SGraph, SEdge, SNode } from "sprotty-protocol";
import { MessageNode, TaskNode } from "./models";

export const graph: SGraph = {
    type: 'graph',
    id: 'graph',
    children: [
        <SNode & TaskNode>{
            type: 'task',
            id: 'task01',
            name: 'First Task',
            isFinished: true,
            isRunning: false,
            position: { x: 0, y: 0 },
            size: { width: 100, height: 100 }
        },
        <SNode & TaskNode>{
            type: 'task',
            id: 'task02',
            name: 'Second Task',
            isFinished: false,
            isRunning: true,
            position: { x: 0, y: 200 },
            size: { width: 100, height: 100 }
        },
        <SNode & TaskNode>{
            type: 'task',
            id: 'task03',
            name: 'Third Task',
            isFinished: false,
            isRunning: false,
            position: { x: 150, y: 0 },
            size: { width: 100, height: 100 }
        },
        <SNode & MessageNode>{
            type: 'message',
            id: 'message01',
            message: 'Insulin',
            messageType: '!!',
            position: {x: 350, y:30},
            size: {width: 100, height: 50}
        },
        <SEdge>{
            type: 'edge',
            id: 'edge01',
            sourceId: 'task01',
            targetId: 'task02',
            routerKind: 'polyline',
        },
        <SEdge>{
            type: 'edge',
            id: 'edge02',
            sourceId: 'task01',
            targetId: 'task03',
            routerKind: 'polyline',
        },
        <SEdge>{
            type: 'edge',
            id: 'edge03',
            sourceId: 'task03',
            targetId: 'task02',
            routerKind: 'polyline',
        },
        <SEdge>{
            type: 'edge',
            id: 'edge04',
            sourceId: 'task03',
            targetId: 'message01',
            routerKind: 'polyline',
        }
    ]
};