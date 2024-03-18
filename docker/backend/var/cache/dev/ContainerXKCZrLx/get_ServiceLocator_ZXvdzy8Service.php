<?php

namespace ContainerXKCZrLx;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_ZXvdzy8Service extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.zXvdzy8' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.zXvdzy8'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'App\\Controller\\Admin\\CategoryCrudController::autocomplete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController::batchDelete' => ['privates', '.service_locator.twrFs.m', 'get_ServiceLocator_TwrFs_MService', true],
            'App\\Controller\\Admin\\CategoryCrudController::configureActions' => ['privates', '.service_locator.UrOEf8r', 'get_ServiceLocator_UrOEf8rService', true],
            'App\\Controller\\Admin\\CategoryCrudController::configureAssets' => ['privates', '.service_locator.wvbCcwL', 'get_ServiceLocator_WvbCcwLService', true],
            'App\\Controller\\Admin\\CategoryCrudController::configureCrud' => ['privates', '.service_locator.Nb584vp', 'get_ServiceLocator_Nb584vpService', true],
            'App\\Controller\\Admin\\CategoryCrudController::configureFilters' => ['privates', '.service_locator.kud45L1', 'get_ServiceLocator_Kud45L1Service', true],
            'App\\Controller\\Admin\\CategoryCrudController::configureResponseParameters' => ['privates', '.service_locator.vMUOjiq', 'get_ServiceLocator_VMUOjiqService', true],
            'App\\Controller\\Admin\\CategoryCrudController::createEditForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\CategoryCrudController::createEditFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\CategoryCrudController::createIndexQueryBuilder' => ['privates', '.service_locator.lng3o3t', 'get_ServiceLocator_Lng3o3tService', true],
            'App\\Controller\\Admin\\CategoryCrudController::createNewForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\CategoryCrudController::createNewFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\CategoryCrudController::delete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController::deleteEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\CategoryCrudController::detail' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController::edit' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController::index' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController::new' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController::persistEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\CategoryCrudController::renderFilters' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController::updateEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\DashboardController::configureUserMenu' => ['privates', '.service_locator.t7nLwyX', 'get_ServiceLocator_T7nLwyXService', true],
            'App\\Controller\\Admin\\MovieCrudController::autocomplete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController::batchDelete' => ['privates', '.service_locator.twrFs.m', 'get_ServiceLocator_TwrFs_MService', true],
            'App\\Controller\\Admin\\MovieCrudController::configureActions' => ['privates', '.service_locator.UrOEf8r', 'get_ServiceLocator_UrOEf8rService', true],
            'App\\Controller\\Admin\\MovieCrudController::configureAssets' => ['privates', '.service_locator.wvbCcwL', 'get_ServiceLocator_WvbCcwLService', true],
            'App\\Controller\\Admin\\MovieCrudController::configureCrud' => ['privates', '.service_locator.Nb584vp', 'get_ServiceLocator_Nb584vpService', true],
            'App\\Controller\\Admin\\MovieCrudController::configureFilters' => ['privates', '.service_locator.kud45L1', 'get_ServiceLocator_Kud45L1Service', true],
            'App\\Controller\\Admin\\MovieCrudController::configureResponseParameters' => ['privates', '.service_locator.vMUOjiq', 'get_ServiceLocator_VMUOjiqService', true],
            'App\\Controller\\Admin\\MovieCrudController::createEditForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\MovieCrudController::createEditFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\MovieCrudController::createIndexQueryBuilder' => ['privates', '.service_locator.lng3o3t', 'get_ServiceLocator_Lng3o3tService', true],
            'App\\Controller\\Admin\\MovieCrudController::createNewForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\MovieCrudController::createNewFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\MovieCrudController::delete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController::deleteEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\MovieCrudController::detail' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController::edit' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController::index' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController::new' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController::persistEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\MovieCrudController::renderFilters' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController::updateEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\UserCrudController::autocomplete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController::batchDelete' => ['privates', '.service_locator.twrFs.m', 'get_ServiceLocator_TwrFs_MService', true],
            'App\\Controller\\Admin\\UserCrudController::configureActions' => ['privates', '.service_locator.UrOEf8r', 'get_ServiceLocator_UrOEf8rService', true],
            'App\\Controller\\Admin\\UserCrudController::configureAssets' => ['privates', '.service_locator.wvbCcwL', 'get_ServiceLocator_WvbCcwLService', true],
            'App\\Controller\\Admin\\UserCrudController::configureCrud' => ['privates', '.service_locator.Nb584vp', 'get_ServiceLocator_Nb584vpService', true],
            'App\\Controller\\Admin\\UserCrudController::configureFilters' => ['privates', '.service_locator.kud45L1', 'get_ServiceLocator_Kud45L1Service', true],
            'App\\Controller\\Admin\\UserCrudController::configureResponseParameters' => ['privates', '.service_locator.vMUOjiq', 'get_ServiceLocator_VMUOjiqService', true],
            'App\\Controller\\Admin\\UserCrudController::createEditForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\UserCrudController::createEditFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\UserCrudController::createIndexQueryBuilder' => ['privates', '.service_locator.lng3o3t', 'get_ServiceLocator_Lng3o3tService', true],
            'App\\Controller\\Admin\\UserCrudController::createNewForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\UserCrudController::createNewFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\UserCrudController::delete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController::deleteEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\UserCrudController::detail' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController::edit' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController::index' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController::new' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController::persistEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\UserCrudController::renderFilters' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController::updateEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\ApiController::readCategory' => ['privates', '.service_locator..B4k9Wg', 'get_ServiceLocator__B4k9WgService', true],
            'App\\Controller\\ApiController::readMovie' => ['privates', '.service_locator.Wql8jrV', 'get_ServiceLocator_Wql8jrVService', true],
            'App\\Controller\\RegistrationController::register' => ['privates', '.service_locator.V6D1oJY', 'get_ServiceLocator_V6D1oJYService', true],
            'App\\Controller\\SecurityController::login' => ['privates', '.service_locator.rSTd.nA', 'get_ServiceLocator_RSTd_NAService', true],
            'App\\Kernel::loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'App\\Kernel::registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel::loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel::registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'App\\Controller\\Admin\\CategoryCrudController:autocomplete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController:batchDelete' => ['privates', '.service_locator.twrFs.m', 'get_ServiceLocator_TwrFs_MService', true],
            'App\\Controller\\Admin\\CategoryCrudController:configureActions' => ['privates', '.service_locator.UrOEf8r', 'get_ServiceLocator_UrOEf8rService', true],
            'App\\Controller\\Admin\\CategoryCrudController:configureAssets' => ['privates', '.service_locator.wvbCcwL', 'get_ServiceLocator_WvbCcwLService', true],
            'App\\Controller\\Admin\\CategoryCrudController:configureCrud' => ['privates', '.service_locator.Nb584vp', 'get_ServiceLocator_Nb584vpService', true],
            'App\\Controller\\Admin\\CategoryCrudController:configureFilters' => ['privates', '.service_locator.kud45L1', 'get_ServiceLocator_Kud45L1Service', true],
            'App\\Controller\\Admin\\CategoryCrudController:configureResponseParameters' => ['privates', '.service_locator.vMUOjiq', 'get_ServiceLocator_VMUOjiqService', true],
            'App\\Controller\\Admin\\CategoryCrudController:createEditForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\CategoryCrudController:createEditFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\CategoryCrudController:createIndexQueryBuilder' => ['privates', '.service_locator.lng3o3t', 'get_ServiceLocator_Lng3o3tService', true],
            'App\\Controller\\Admin\\CategoryCrudController:createNewForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\CategoryCrudController:createNewFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\CategoryCrudController:delete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController:deleteEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\CategoryCrudController:detail' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController:edit' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController:index' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController:new' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController:persistEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\CategoryCrudController:renderFilters' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\CategoryCrudController:updateEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\DashboardController:configureUserMenu' => ['privates', '.service_locator.t7nLwyX', 'get_ServiceLocator_T7nLwyXService', true],
            'App\\Controller\\Admin\\MovieCrudController:autocomplete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController:batchDelete' => ['privates', '.service_locator.twrFs.m', 'get_ServiceLocator_TwrFs_MService', true],
            'App\\Controller\\Admin\\MovieCrudController:configureActions' => ['privates', '.service_locator.UrOEf8r', 'get_ServiceLocator_UrOEf8rService', true],
            'App\\Controller\\Admin\\MovieCrudController:configureAssets' => ['privates', '.service_locator.wvbCcwL', 'get_ServiceLocator_WvbCcwLService', true],
            'App\\Controller\\Admin\\MovieCrudController:configureCrud' => ['privates', '.service_locator.Nb584vp', 'get_ServiceLocator_Nb584vpService', true],
            'App\\Controller\\Admin\\MovieCrudController:configureFilters' => ['privates', '.service_locator.kud45L1', 'get_ServiceLocator_Kud45L1Service', true],
            'App\\Controller\\Admin\\MovieCrudController:configureResponseParameters' => ['privates', '.service_locator.vMUOjiq', 'get_ServiceLocator_VMUOjiqService', true],
            'App\\Controller\\Admin\\MovieCrudController:createEditForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\MovieCrudController:createEditFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\MovieCrudController:createIndexQueryBuilder' => ['privates', '.service_locator.lng3o3t', 'get_ServiceLocator_Lng3o3tService', true],
            'App\\Controller\\Admin\\MovieCrudController:createNewForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\MovieCrudController:createNewFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\MovieCrudController:delete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController:deleteEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\MovieCrudController:detail' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController:edit' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController:index' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController:new' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController:persistEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\MovieCrudController:renderFilters' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\MovieCrudController:updateEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\UserCrudController:autocomplete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController:batchDelete' => ['privates', '.service_locator.twrFs.m', 'get_ServiceLocator_TwrFs_MService', true],
            'App\\Controller\\Admin\\UserCrudController:configureActions' => ['privates', '.service_locator.UrOEf8r', 'get_ServiceLocator_UrOEf8rService', true],
            'App\\Controller\\Admin\\UserCrudController:configureAssets' => ['privates', '.service_locator.wvbCcwL', 'get_ServiceLocator_WvbCcwLService', true],
            'App\\Controller\\Admin\\UserCrudController:configureCrud' => ['privates', '.service_locator.Nb584vp', 'get_ServiceLocator_Nb584vpService', true],
            'App\\Controller\\Admin\\UserCrudController:configureFilters' => ['privates', '.service_locator.kud45L1', 'get_ServiceLocator_Kud45L1Service', true],
            'App\\Controller\\Admin\\UserCrudController:configureResponseParameters' => ['privates', '.service_locator.vMUOjiq', 'get_ServiceLocator_VMUOjiqService', true],
            'App\\Controller\\Admin\\UserCrudController:createEditForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\UserCrudController:createEditFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\UserCrudController:createIndexQueryBuilder' => ['privates', '.service_locator.lng3o3t', 'get_ServiceLocator_Lng3o3tService', true],
            'App\\Controller\\Admin\\UserCrudController:createNewForm' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\UserCrudController:createNewFormBuilder' => ['privates', '.service_locator.Lazlz4J', 'get_ServiceLocator_Lazlz4JService', true],
            'App\\Controller\\Admin\\UserCrudController:delete' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController:deleteEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\UserCrudController:detail' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController:edit' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController:index' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController:new' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController:persistEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\Admin\\UserCrudController:renderFilters' => ['privates', '.service_locator.t9B7cZ4', 'get_ServiceLocator_T9B7cZ4Service', true],
            'App\\Controller\\Admin\\UserCrudController:updateEntity' => ['privates', '.service_locator.CsMkqUa', 'get_ServiceLocator_CsMkqUaService', true],
            'App\\Controller\\ApiController:readCategory' => ['privates', '.service_locator..B4k9Wg', 'get_ServiceLocator__B4k9WgService', true],
            'App\\Controller\\ApiController:readMovie' => ['privates', '.service_locator.Wql8jrV', 'get_ServiceLocator_Wql8jrVService', true],
            'App\\Controller\\RegistrationController:register' => ['privates', '.service_locator.V6D1oJY', 'get_ServiceLocator_V6D1oJYService', true],
            'App\\Controller\\SecurityController:login' => ['privates', '.service_locator.rSTd.nA', 'get_ServiceLocator_RSTd_NAService', true],
            'kernel:loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel:registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
        ], [
            'App\\Controller\\Admin\\CategoryCrudController::autocomplete' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::batchDelete' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::configureActions' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::configureAssets' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::configureCrud' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::configureFilters' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::configureResponseParameters' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::createEditForm' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::createEditFormBuilder' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::createIndexQueryBuilder' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::createNewForm' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::createNewFormBuilder' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::delete' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::deleteEntity' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::detail' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::edit' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::index' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::new' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::persistEntity' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::renderFilters' => '?',
            'App\\Controller\\Admin\\CategoryCrudController::updateEntity' => '?',
            'App\\Controller\\Admin\\DashboardController::configureUserMenu' => '?',
            'App\\Controller\\Admin\\MovieCrudController::autocomplete' => '?',
            'App\\Controller\\Admin\\MovieCrudController::batchDelete' => '?',
            'App\\Controller\\Admin\\MovieCrudController::configureActions' => '?',
            'App\\Controller\\Admin\\MovieCrudController::configureAssets' => '?',
            'App\\Controller\\Admin\\MovieCrudController::configureCrud' => '?',
            'App\\Controller\\Admin\\MovieCrudController::configureFilters' => '?',
            'App\\Controller\\Admin\\MovieCrudController::configureResponseParameters' => '?',
            'App\\Controller\\Admin\\MovieCrudController::createEditForm' => '?',
            'App\\Controller\\Admin\\MovieCrudController::createEditFormBuilder' => '?',
            'App\\Controller\\Admin\\MovieCrudController::createIndexQueryBuilder' => '?',
            'App\\Controller\\Admin\\MovieCrudController::createNewForm' => '?',
            'App\\Controller\\Admin\\MovieCrudController::createNewFormBuilder' => '?',
            'App\\Controller\\Admin\\MovieCrudController::delete' => '?',
            'App\\Controller\\Admin\\MovieCrudController::deleteEntity' => '?',
            'App\\Controller\\Admin\\MovieCrudController::detail' => '?',
            'App\\Controller\\Admin\\MovieCrudController::edit' => '?',
            'App\\Controller\\Admin\\MovieCrudController::index' => '?',
            'App\\Controller\\Admin\\MovieCrudController::new' => '?',
            'App\\Controller\\Admin\\MovieCrudController::persistEntity' => '?',
            'App\\Controller\\Admin\\MovieCrudController::renderFilters' => '?',
            'App\\Controller\\Admin\\MovieCrudController::updateEntity' => '?',
            'App\\Controller\\Admin\\UserCrudController::autocomplete' => '?',
            'App\\Controller\\Admin\\UserCrudController::batchDelete' => '?',
            'App\\Controller\\Admin\\UserCrudController::configureActions' => '?',
            'App\\Controller\\Admin\\UserCrudController::configureAssets' => '?',
            'App\\Controller\\Admin\\UserCrudController::configureCrud' => '?',
            'App\\Controller\\Admin\\UserCrudController::configureFilters' => '?',
            'App\\Controller\\Admin\\UserCrudController::configureResponseParameters' => '?',
            'App\\Controller\\Admin\\UserCrudController::createEditForm' => '?',
            'App\\Controller\\Admin\\UserCrudController::createEditFormBuilder' => '?',
            'App\\Controller\\Admin\\UserCrudController::createIndexQueryBuilder' => '?',
            'App\\Controller\\Admin\\UserCrudController::createNewForm' => '?',
            'App\\Controller\\Admin\\UserCrudController::createNewFormBuilder' => '?',
            'App\\Controller\\Admin\\UserCrudController::delete' => '?',
            'App\\Controller\\Admin\\UserCrudController::deleteEntity' => '?',
            'App\\Controller\\Admin\\UserCrudController::detail' => '?',
            'App\\Controller\\Admin\\UserCrudController::edit' => '?',
            'App\\Controller\\Admin\\UserCrudController::index' => '?',
            'App\\Controller\\Admin\\UserCrudController::new' => '?',
            'App\\Controller\\Admin\\UserCrudController::persistEntity' => '?',
            'App\\Controller\\Admin\\UserCrudController::renderFilters' => '?',
            'App\\Controller\\Admin\\UserCrudController::updateEntity' => '?',
            'App\\Controller\\ApiController::readCategory' => '?',
            'App\\Controller\\ApiController::readMovie' => '?',
            'App\\Controller\\RegistrationController::register' => '?',
            'App\\Controller\\SecurityController::login' => '?',
            'App\\Kernel::loadRoutes' => '?',
            'App\\Kernel::registerContainerConfiguration' => '?',
            'kernel::loadRoutes' => '?',
            'kernel::registerContainerConfiguration' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:autocomplete' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:batchDelete' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:configureActions' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:configureAssets' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:configureCrud' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:configureFilters' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:configureResponseParameters' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:createEditForm' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:createEditFormBuilder' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:createIndexQueryBuilder' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:createNewForm' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:createNewFormBuilder' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:delete' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:deleteEntity' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:detail' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:edit' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:index' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:new' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:persistEntity' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:renderFilters' => '?',
            'App\\Controller\\Admin\\CategoryCrudController:updateEntity' => '?',
            'App\\Controller\\Admin\\DashboardController:configureUserMenu' => '?',
            'App\\Controller\\Admin\\MovieCrudController:autocomplete' => '?',
            'App\\Controller\\Admin\\MovieCrudController:batchDelete' => '?',
            'App\\Controller\\Admin\\MovieCrudController:configureActions' => '?',
            'App\\Controller\\Admin\\MovieCrudController:configureAssets' => '?',
            'App\\Controller\\Admin\\MovieCrudController:configureCrud' => '?',
            'App\\Controller\\Admin\\MovieCrudController:configureFilters' => '?',
            'App\\Controller\\Admin\\MovieCrudController:configureResponseParameters' => '?',
            'App\\Controller\\Admin\\MovieCrudController:createEditForm' => '?',
            'App\\Controller\\Admin\\MovieCrudController:createEditFormBuilder' => '?',
            'App\\Controller\\Admin\\MovieCrudController:createIndexQueryBuilder' => '?',
            'App\\Controller\\Admin\\MovieCrudController:createNewForm' => '?',
            'App\\Controller\\Admin\\MovieCrudController:createNewFormBuilder' => '?',
            'App\\Controller\\Admin\\MovieCrudController:delete' => '?',
            'App\\Controller\\Admin\\MovieCrudController:deleteEntity' => '?',
            'App\\Controller\\Admin\\MovieCrudController:detail' => '?',
            'App\\Controller\\Admin\\MovieCrudController:edit' => '?',
            'App\\Controller\\Admin\\MovieCrudController:index' => '?',
            'App\\Controller\\Admin\\MovieCrudController:new' => '?',
            'App\\Controller\\Admin\\MovieCrudController:persistEntity' => '?',
            'App\\Controller\\Admin\\MovieCrudController:renderFilters' => '?',
            'App\\Controller\\Admin\\MovieCrudController:updateEntity' => '?',
            'App\\Controller\\Admin\\UserCrudController:autocomplete' => '?',
            'App\\Controller\\Admin\\UserCrudController:batchDelete' => '?',
            'App\\Controller\\Admin\\UserCrudController:configureActions' => '?',
            'App\\Controller\\Admin\\UserCrudController:configureAssets' => '?',
            'App\\Controller\\Admin\\UserCrudController:configureCrud' => '?',
            'App\\Controller\\Admin\\UserCrudController:configureFilters' => '?',
            'App\\Controller\\Admin\\UserCrudController:configureResponseParameters' => '?',
            'App\\Controller\\Admin\\UserCrudController:createEditForm' => '?',
            'App\\Controller\\Admin\\UserCrudController:createEditFormBuilder' => '?',
            'App\\Controller\\Admin\\UserCrudController:createIndexQueryBuilder' => '?',
            'App\\Controller\\Admin\\UserCrudController:createNewForm' => '?',
            'App\\Controller\\Admin\\UserCrudController:createNewFormBuilder' => '?',
            'App\\Controller\\Admin\\UserCrudController:delete' => '?',
            'App\\Controller\\Admin\\UserCrudController:deleteEntity' => '?',
            'App\\Controller\\Admin\\UserCrudController:detail' => '?',
            'App\\Controller\\Admin\\UserCrudController:edit' => '?',
            'App\\Controller\\Admin\\UserCrudController:index' => '?',
            'App\\Controller\\Admin\\UserCrudController:new' => '?',
            'App\\Controller\\Admin\\UserCrudController:persistEntity' => '?',
            'App\\Controller\\Admin\\UserCrudController:renderFilters' => '?',
            'App\\Controller\\Admin\\UserCrudController:updateEntity' => '?',
            'App\\Controller\\ApiController:readCategory' => '?',
            'App\\Controller\\ApiController:readMovie' => '?',
            'App\\Controller\\RegistrationController:register' => '?',
            'App\\Controller\\SecurityController:login' => '?',
            'kernel:loadRoutes' => '?',
            'kernel:registerContainerConfiguration' => '?',
        ]);
    }
}
