import { Container, ContainerModule } from 'inversify';
import { configureModelElement, configureViewerOptions, loadDefaultModules, LocalModelSource, PolylineEdgeView, SEdgeImpl, SGraphImpl, SGraphView, SNodeImpl, TYPES } from 'sprotty';
import { MessageNodeView, TaskNodeView } from './views';

export const createContainer = (containerId: string) => {
    const myModule = new ContainerModule((bind, unbind, isBound, rebind) => {
        bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();

        const context = { bind, unbind, isBound, rebind };
        configureModelElement(context, 'graph', SGraphImpl, SGraphView);
        configureModelElement(context, 'task', SNodeImpl, TaskNodeView);
        configureModelElement(context, 'message', SNodeImpl, MessageNodeView);
        configureModelElement(context, 'edge', SEdgeImpl, PolylineEdgeView);

        configureViewerOptions(context, {
            needsClientLayout: false,
            baseDiv: containerId
        });
    });

    const container = new Container();
    loadDefaultModules(container);
    container.load(myModule);
    return container;
};